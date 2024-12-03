export interface UserProps {
    _id: string;
    avatar?: string | null;
    email?: string;
    firstName?: string | null;
    lastName?: string | null;
    password?: string | null;
  }
  
  export interface MessageProps {
    _id: string;
    content: string;
    userId: string;
    chatId: string;
    createdAt: string;
    user: UserProps;
  }
  
  export interface ChatProps {
    _id: string;
    status: string;
    userIds: string[];
  }
  