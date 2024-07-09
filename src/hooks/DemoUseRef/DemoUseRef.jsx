import { Button, Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const DemoUseRef = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const inputFileRef = useRef(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', event);
  };

  const handleUploadFile = () => {
    inputFileRef.current.click();
  };

  const handleOnInputFile = (event) => {
    console.log('handleOnInputFile', event.target.files[0]);
    setFile(event.target.files[0]);
  };

  return (
    <div>
      DemoUseRef
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input ref={inputRef} id="" className="" placeholder="Username" />
      </form>
      <Button
        onClick={() => {
          formRef.current.requestSubmit();
        }}
      >
        Submit
      </Button>
      <hr />
      <input ref={inputFileRef} type="file" hidden onInput={handleOnInputFile} />
      <div
        onClick={handleUploadFile}
        className="w-[200px] h-[200px] rounded-md bg-green-800 text-white flex items-center justify-center cursor-pointer"
      >
        Upload File
      </div>
      {file && <img src={URL.createObjectURL(file)} className="w-[200px] h-[200px]" />}
    </div>
  );
};

export default DemoUseRef;
