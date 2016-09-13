export const generateTerrain = (width:number, height:number):Array<string> => {
  const array:Array<string> = [];
  for (let i = 0; i < width * height; i++) {
    array[i] = '0';
  }

  return array;
}
