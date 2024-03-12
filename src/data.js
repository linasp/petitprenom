var namesArray = null;

export async function loadNames() {
  if (namesArray === null) {
    try {
      const response = await fetch('data/names.txt');
      const data = await response.text();
      namesArray = data.split('\n').filter((name) => name.trim() !== ''); // Split by newline and filter out empty lines
    } catch (error) {
      console.error('Error fetching names:', error);
    }
  }
  return namesArray;
}