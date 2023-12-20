import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = forwardRef((props,ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
        validate: () => {
          if(inputRef.current.value.length > 3) {
            inputRef.current.value = ''
            inputRef.current.focus();
          }
        }
    }
  })
  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={inputRef}/>
    </div>
  );
})

export default SomeComponent;
