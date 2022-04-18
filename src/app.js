export default function healthStatus(data) {
  let condition;
  if (data.health > 50) {
    condition = 'healthy';
  } else if (data.health >= 15) {
    condition = 'wounded';
  } else if (data.health < 15) {
    condition = 'critical';
  } else {
    condition = 'Character is otherwordly being or something went wrong, check his(her) status carefully';
  }
  return condition;
}
