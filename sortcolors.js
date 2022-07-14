let sortColors = function (nums) {
  let red = 0;
  let white = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      red++;
    } else if (nums[i] === 1) {
      white++;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (j < red) {
      nums[j] = 0;
    } else if (j < red + white) {
      nums[j] = 1;
    } else {
      nums[j] = 2;
    }
  }

  return nums;
};
