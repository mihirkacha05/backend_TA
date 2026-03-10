"use server"

export async function saveData(formData:FormData) {
  const name = formData.get("name")
  console.log(name)
}