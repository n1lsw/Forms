import axios from "axios";

export {};

const form = document.getElementById("mailAndpw") as HTMLFormElement;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const fromEntries = formData.entries();
  const data = Object.fromEntries(formData.entries()) as Record<
    string,
    string | string[]
  >;

  const user: Record<string, any> = await axios.post(
    "http://0.0.0.0:3000/posts",
    data
  );
  console.log(user.data);

  alert(`Successfully registered! Your user id is: ${user.data.id}`);
});
