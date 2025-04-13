import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

function Airdrop() {
    const wallet = useWallet()
    const {connection} = useConnection()
    async function sendAirdropToUser(){
        await connection.requestAirdrop(wallet.publicKey!,1000000000)    
        alert("alert")
    }
  return (
    <div>
        <input type="text"
        placeholder='Amount' />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop