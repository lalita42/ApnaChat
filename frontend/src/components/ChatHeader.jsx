import { X, Video} from "lucide-react"; // import Video icon
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers = [] } = useAuthStore(); // ✅ default empty array
  const navigate = useNavigate();
  if (!selectedUser) return null;

  // Handle Video Call
  const handleVideoCall = () => {
    // navigate(`/call/${selectedUser._id}`);
  };
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser?.profilePic || "/avatar.png"}
                alt={selectedUser?.fullName || "User"}
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium">{selectedUser?.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers?.includes(selectedUser?._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {/* Video Call Button */}
          <button
            onClick={handleVideoCall}
            className="p-1.5 rounded-full hover:bg-base-200 transition"
          >
            <Video className="w-5 h-5 text-blue-600" />
          </button>
          {/* <button
  onClick={() => navigate("/snake")}
  className="p-1.5 rounded-full hover:bg-base-200 transition"
>
  <Snail/>Snake Game
</button> */}

          {/* Close Button */}
          <button onClick={() => setSelectedUser(null)}>
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
