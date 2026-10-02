export const foridfetchfromsap = async (onlyforid) => {
  try {

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${onlyforid}`);

    if (!res.ok) {
      return null;
    }

    return await res.json();
  }
  
  catch (error) {
    return null;
  }
  
};