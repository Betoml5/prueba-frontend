export const getFoodTrucksAPI = async () => {
  try {
    const response = await fetch(
      "https://data.sfgov.org/resource/rqzj-sfat.json"
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
