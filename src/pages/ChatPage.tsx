import { useParams } from "react-router-dom";
import ChatRoom from "../components/ChatRoom";
import { FC } from "react";

const ChatPage: FC = () => {
  const { chatId, userId } = useParams<{ chatId: string; userId: string }>();

  if (!chatId || !userId) return <div>Invalid parameters</div>;

  return <ChatRoom chatId={chatId} userId={userId} />;
};

export default ChatPage;