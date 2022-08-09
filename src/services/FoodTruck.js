export const getFoodTrucksAPI = async () => {
  try {
    const response = await fetch(
      "https://data.sfgov.org/resource/rqzj-sfat.json"
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

//En caso de que hubiera un endpoint para obtener los food trucks por tipo, se podria hacer asi:
export const getFoodTruckByTypeAPI = async (type) => {
  try {
    const response = await fetch(
      `https://data.sfgov.org/resource/rqzj-sfat.json?type=${type}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
