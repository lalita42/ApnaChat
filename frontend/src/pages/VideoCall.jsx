// import React, { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5001"); // your backend URL

// const VideoCall = ({ selectedUserId }) => {
//   const localVideoRef = useRef(null);
//   const remoteVideoRef = useRef(null);
//   const peerConnection = useRef(null);

//   const [inCall, setInCall] = useState(false);

//   useEffect(() => {
//     // Get camera + mic access
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//       .then(stream => {
//         localVideoRef.current.srcObject = stream;
//       });

//     // Handle incoming call
//     socket.on("incoming-call", async ({ from, offer }) => {
//       peerConnection.current = createPeerConnection(from);

//       await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
//       const answer = await peerConnection.current.createAnswer();
//       await peerConnection.current.setLocalDescription(answer);

//       socket.emit("answer-call", { to: from, answer });
//       setInCall(true);
//     });

//     // Handle call answered
//     socket.on("call-answered", async ({ answer }) => {
//       await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
//       setInCall(true);
//     });

//     // Handle ICE Candidate
//     socket.on("ice-candidate", async ({ candidate }) => {
//       try {
//         await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
//       } catch (e) {
//         console.error("Error adding received ice candidate", e);
//       }
//     });

//     return () => {
//       socket.off("incoming-call");
//       socket.off("call-answered");
//       socket.off("ice-candidate");
//     };
//   }, []);

//   // Create peer connection
//   const createPeerConnection = (remoteSocketId) => {
//     const pc = new RTCPeerConnection();

//     // Add local stream
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
//       stream.getTracks().forEach(track => pc.addTrack(track, stream));
//     });

//     // Remote stream
//     pc.ontrack = (event) => {
//       remoteVideoRef.current.srcObject = event.streams[0];
//     };

//     // ICE candidates
//     pc.onicecandidate = (event) => {
//       if (event.candidate) {
//         socket.emit("ice-candidate", { to: remoteSocketId, candidate: event.candidate });
//       }
//     };

//     return pc;
//   };

//   // Start call
//   const startCall = async () => {
//     peerConnection.current = createPeerConnection(selectedUserId);

//     const offer = await peerConnection.current.createOffer();
//     await peerConnection.current.setLocalDescription(offer);

//     socket.emit("call-user", { to: selectedUserId, offer });
//   };

//   return (
//     <div className="flex flex-col items-center gap-4">
//       <div className="flex gap-4">
//         <video ref={localVideoRef} autoPlay playsInline muted className="w-64 border" />
//         <video ref={remoteVideoRef} autoPlay playsInline className="w-64 border" />
//       </div>

//       {!inCall && (
//         <button
//           onClick={startCall}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Start Call
//         </button>
//       )}
//     </div>
//   );
// };

// export default VideoCall;
