const info = require("./data/data.json");

const allDivisions = info.divisions.map((division) => division.name);

const getDistrictsOfDivision = (division) => {
  const input = division.toUpperCase();
  const result = info.divisions.find((div) => div.name === input);
  if (result) return result.districts.map((district) => district.name);
  return [];
};
const getThanasOfDistrict = (district) => {
  const input = district.toUpperCase();
  const result = info.divisions.find((div) =>
    div.districts.find((dist) => dist.name === input)
  );
  if (result) return result.districts.find((dist) => dist.name === input).thana;
  return [];
};
const getAllDistricts = () => {
  const ans = [];
  allDivisions.forEach((division) => {
    ans.push(...getDistrictsOfDivision(division));
  });
  return ans;
};
const getAllThanas = () => {
  const ans = [];
  const allDistricts = getAllDistricts();
  allDistricts.forEach((district) => {
    ans.push(...getThanasOfDistrict(district));
  });
  return ans;
};

module.exports = {
  allDivisions,
  getAllDistricts,
  getDistrictsOfDivision,
  getAllThanas,
  getThanasOfDistrict,
};
