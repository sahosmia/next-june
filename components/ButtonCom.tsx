import React from 'react'
import { Button } from './ui/button';

const ButtonCom = () => {
  return (
    <div>
      <Button>New Button</Button>
      <Button variant={"ghost"}>New Button</Button>
      <Button variant={"secondary"}>New Button</Button>
      <Button variant={"destructive"}>New Button</Button>
      <Button variant={"outline"}>New Button</Button>
      <Button variant={"link"}>New Button</Button>
      <Button variant={"my"}>New Button</Button>
    </div>
  );
}

export default ButtonCom