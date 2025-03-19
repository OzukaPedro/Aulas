'use client'
import { useState } from "react";
import styles from "./page.module.css"

export default function Home() {

  const[number, setNumber] = useState(Number);
  let n = 10;
  const min = 1;
  let max = n;
  let list = [];
  for(let i = 1; i <= n; i++){
    list.push(i);
  }
  function handleClick(){
    let retirar = ((min + (Math.random() * (max-min))) - 1).toFixed(0);
    setNumber(list.splice(retirar, 1))
    list.splice(retirar, 1)
    
    console.log(retirar)
    max--;
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Randomizer</h1>
        <button onClick={handleClick} className={styles.buttons}>random</button>
        <p className={styles.randomNumber}>{number}</p>
      </div>
    </div>
  );
}
