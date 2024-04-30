# An NPM package to get Divisions, Districts and Thana/Upazilla of Bangladesh.

---

## This package contains functions like `getAllDistricts`, `getDistrictsOfDivision`, `getAllThanas`, `getThanasOfDistrict` and a variable named `allDivisions`.

#### `allDivisions`

It contains all the division names of Bangladesh.


#### `getAllDistricts`

This function returns all district names of Bangladesh. For example, `const allDistricts = getAllDistricts()`.

#### `getDistrictsOfDivision`

This function returns the districts of a specified division. For example, `const districts = getDistrictsOfDivision('DHAKA')`. Note that, the division name is case insensitive. It will work even if we pass `'Dhaka'` as division name or `'dhaka'`.

#### `getAllThanas`

This function returns all thana/upazilla names of Bangladesh. For example, `const allThanas = getAllThanas()`.

#### `getThanasOfDistrict`

This function returns the thanas/upazillas of a specified district. For example, `const thanas = getThanasOfDistrict('RANGPUR')`. Note that, the district name is case insensitive. It will work even if we pass `'Rangpur'` as district name or `'rangpur'`.