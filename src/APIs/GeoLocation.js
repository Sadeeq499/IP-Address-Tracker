export const getGeoLocation = async (IP) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_hpzXZ5prI8jf15BCfUHCaYNwpQQ32&ipAddress=
    ${IP}`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
