"use client";

import { forwardRef, useRef } from "react";

const SpecialInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusToInput() {
    console.log(inputRef.current);
    inputRef?.current?.focus();
  }

  /**
   *
			This happens because by default React does not let a component access the DOM nodes of other components. Not even for its own children! This is intentional. Refs are an escape hatch that should be used sparingly. Manually manipulating another component’s DOM nodes makes your code even more fragile.
			Instead, components that want to expose their DOM nodes have to opt in to that behavior. A component can specify that it “forwards” its ref to one of its children. Here’s how MyInput can use the forwardRef API:
   */

  return (
    <div>
      <SpecialInput ref={inputRef} />
      <button onClick={focusToInput}>focus</button>
    </div>
  );
}
