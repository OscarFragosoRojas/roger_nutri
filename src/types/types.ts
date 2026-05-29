export interface Props {
  title: string;
  description?: string;
}

export interface FloatingBadgeProps {
  text: string;
  subText: string;
  icon?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}
