import sharp from 'sharp';

function resize(img: string, height: number, width: number) {
  sharp(`./images/${img}`)
    .resize({ width: width })
    .resize({ height: height })
    .toFile(`./Thumnail/${width} ${height} ${img}`)
    .catch((err) => {
      return false;
    });

  return true;
}
export default resize;
