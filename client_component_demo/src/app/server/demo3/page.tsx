import { saveData } from "../actions/actions"

export default function Page() {
  return (
    <form action={saveData}>
      <input name="name" />
      <button>Submit</button>
    </form>
  )
}