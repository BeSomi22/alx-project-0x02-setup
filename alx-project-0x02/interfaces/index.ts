// Interface for a basic user
export interface User {
  id: number;
  name: string;
  email: string;
}
export interface CardProps {
  title: string;
  content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: ()=> void;
}
export interface PostProps {
  userId: number;
  title: string;
  content: string;
}