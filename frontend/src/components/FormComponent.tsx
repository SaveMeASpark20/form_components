import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

type InpuFieldParams = InputHTMLAttributes<HTMLInputElement> & {
  label : string;
}

export const InputField = forwardRef<HTMLInputElement, InpuFieldParams>(({label, ...inputParams }, ref ) => (
    <div className="flex flex-col p-4">
      <label className="text-lg text-[#646cffec]">{label}</label>
      <input 
      ref={ref}
        {...inputParams}
        className="input-text w-[500px]"
      />
    </div>
  )
)


type TextareaFieldParams = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & {
  label: string;
};

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldParams>(
  ({ label, ...textareaParams }, ref) => (
    <div className="flex flex-col p-4">
      <label className="text-lg text-[#646cffec]">{label}</label>
      <textarea
        ref={ref}
        {...textareaParams}
        className="outline-[#646cffec]"
      />
    </div>
  )
);

export const CheckBox = forwardRef<HTMLInputElement, InpuFieldParams>(
  ({ label, ...textareaParams }, ref) => (
    <div className="flex gap-2 p-4 items-center">
      <label className="text-lg text-[#646cffec]">{label}</label>
      <input
        type="checkbox"
        ref={ref}
        {...textareaParams}
      />
    </div>
  )
);

type ToggleSwitchParams = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchParams>(
  ({ label, ...switchParams }, ref) => (
    <div className="toggle-switch p-4">
      <label className="text-lg text-[#646cffec]">
        <input
          type="checkbox"
          ref={ref}
          {...switchParams}
        />
        <span className="slider"></span>
        {label}
      </label>
    </div>
  )
);

type DropdownParams = Omit<SelectHTMLAttributes<HTMLSelectElement>, "className" | "type"> & {
  label: string;
  options: { value: string; label: string }[];
};

export const Dropdown = forwardRef<HTMLSelectElement, DropdownParams>(
  ({ label, options, ...selectParams }, ref) => (
    <div className="dropdown p-4">
      <label className="text-lg text-[#646cffec] ">{label}</label>
      <select ref={ref} {...selectParams}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
);


