import type { SelectItem } from "./select.interface";

export interface MultiSelectProps {
  items: SelectItem[];
  placeholder?: string;
  onChange?: (selectedItems: SelectItem[]) => void;
  allowNewItems?: boolean;
  newItemPlaceholder?: string;
  className?: string;
}
