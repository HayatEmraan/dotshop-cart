export default async function removeFetch(id) {
  const res = await fetch(
    `https://cart-api.teamrabbil.com/api/remove-cart/${id}`,
    {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );
  const data = await res.json();
  return data.data;
}
