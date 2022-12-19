import axios from "axios";

export {};

const form = document.getElementById("mailAndpw") as HTMLFormElement;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  // console.log("ok" + formData);
  const fromEntries = formData.entries();
  const data = Object.fromEntries(formData.entries()) as Record<
    string,
    string | string[]
  >;

  const mailcheck = await axios.get(
    `http://0.0.0.0:3000/users?email=${data.email}`
  );

  // const accountName = data.find(
  //   (obj) => obj.email === data.email && obj.password === data.pw
  // );

  if (data.pw.length == 0 || data.email.length == 0) {
    alert(data.pw.length == 0 ? "pls enter pw" : "please enter mail");
  } else {
    if (mailcheck.data.length > 0) {
      alert("Cool, you are alredy a member. You can now use our member area");
      // window.location.href = "www.google.de";
    } else {
      const user: Record<string, any> = await axios.post(
        "http://0.0.0.0:3000/users",
        data
      );
      console.log(user.data);

      alert(`Successfully registered! Your user id is: ${user.data.id}`);
    }
  }
});
