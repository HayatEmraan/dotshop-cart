export default async function verifyFetch(email, otp) {
  const res = await fetch("https://cart-api.teamrabbil.com/api/verify-login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      UserEmail: email,
      OTP: otp,
    }),
  });
  const data = await res.json();
  return data.data;
}
