"use client"

import { useState } from "react"
import { printData } from "./actions"

export default function ClientForm() {

  const [name, setName] = useState("")

  function handleSubmit(e:any) {
    e.preventDefault()

    console.log("Client received:", name)
  }

  return (
    <div>
      <h2>Client Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />

        <button type="submit">Submit Client</button>
      </form>

       <hr />

      <form action={printData}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit server</button>
      </form>

    </div>
  )
}