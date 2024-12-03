import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "../pages/ChatPage";

const IndexRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:chatId/user/:userId" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default IndexRoutes;
