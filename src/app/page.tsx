'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const[number, setNumber] = useState(Number);
  let n = 50;
  const min = 1;
  const max = n;
  const list = [0];
  for(let i = 1; i <= n; i++){
    list.push(i);
  }
  console.log(list)
  function handleClick(){
    setNumber(min + (Math.random() * (max-min)));
    list.splice(number);
    n--;
    console.log(number)
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Randomizer</h1>
        <button onClick={handleClick} className={styles.buttons}>random</button>
        <p className={styles.randomNumber}>{number.toFixed(0)}</p>
      </div>
    </div>
  );
}
