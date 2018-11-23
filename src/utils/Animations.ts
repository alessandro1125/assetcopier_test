export class Animations {
  static getXvalTransform (tMax, tOffset, increment, tVal) : number{
    const k = (increment - 1) / ((Math.pow(tMax - tOffset, 1/3.0)) - Math.cbrt(-tOffset));
    const a = -k * (Math.cbrt(-tOffset)) + 1;
    return k * Math.cbrt(tVal - tOffset) + a;
  }
}
