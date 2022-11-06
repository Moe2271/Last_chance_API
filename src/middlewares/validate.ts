import fs from 'fs';
import sizeOf from 'image-size';

const exists = function does_exist(
  img: string,
  height: number,
  width: number
): boolean {
  if (fs.existsSync(`./Thumnail/${img}`)) {
    const dims = sizeOf(`./Thumnail/${img}`);

    if (width == dims.width && height == dims.height) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//---------------------------------------------------

function validate(img: string, height: number, width: number): boolean {
  let check: boolean = true;

  if (width <= 0 || height <= 0) {
    check = false;
  }
  //-----
  if (!fs.existsSync(`./images/${img}`)) {
    check = false;
  }
  return check;
}

export default {
  validate,
  exists,
};
