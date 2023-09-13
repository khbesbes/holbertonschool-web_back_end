export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const newtask = false;
      const task2 = true;
      return [newtask, task2];
    }
  
    return [task, task2];
  }
