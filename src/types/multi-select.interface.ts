import type { Option } from "./select.type";

export interface MultiSelectProps {
  items: Option[];
  placeholder?: string;
  onChange?: (selectedItems: Option[]) => void;
  allowNewItems?: boolean;
  newItemPlaceholder?: string;
  className?: string;
}
