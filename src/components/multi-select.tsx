import React, { useState, useRef, type RefObject } from "react";
import styles from "./multi-select.module.css";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import useClickOutside from "../hook/click-outside";
import { getRandomIcon } from "../utils/random-icons";
import type { Option } from "../types/select.type";
import type { Props } from "../types/multi-select.interface";

const MultiSelect: React.FC<Props> = ({ options }) => {
  const [items, setItems] = useState<Option[]>(options);
  const [selected, setSelected] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: Option) => {
    if (selected.some((i) => i.label === item.label)) {
      setSelected(selected.filter((i) => i.label !== item.label));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newItem = { label: inputValue, icon: getRandomIcon() };
      setItems([...items, newItem]);
      setSelected([...selected, newItem]);
      setInputValue("");
    }
  };

  useClickOutside(dropdownRef as RefObject<HTMLElement>, () => {
    setIsOpen(false);
  });

  return (
    <div className={styles.multiSelect} ref={dropdownRef}>
      <div
        className={styles.selectButton}
        tabIndex={0}
        onClick={toggleDropdown}
      >
        <span>
          {selected.length > 0
            ? selected.map((item) => item.label).join(", ")
            : "Select options"}
        </span>
        <ChevronDownIcon
          size={16}
          className={`${styles.chevron} ${isOpen ? styles.chevronUp : ""}`}
        >
          ⌄
        </ChevronDownIcon>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <input
            className={styles.newItemInput}
            placeholder="Add new item - press enter"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddItem}
          />
          {items.map((item) => (
            <div
              key={item.label}
              className={`${styles.dropdownItem} ${
                selected.some((i) => i.label === item.label)
                  ? styles.selectedItem
                  : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              <div className={styles.itemContent}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <span className={styles.itemLabel}>{item.label}</span>
              </div>
              <span
                className={`${styles.checkIcon} ${
                  selected.some((i) => i.label === item.label)
                    ? styles.visible
                    : ""
                }`}
              >
                {selected.some((i) => i.label === item.label) && (
                  <CheckIcon size={16} />
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
