const blocksAway = function(directions) {
  let output = {east: 0, north: 0};
  let compass;

  if (directions[0] === "right") {
    output.east += directions[1];
    compass = 'east';
  } else if (directions[0] === "left") {
    output.north += directions[1];
    compass = 'north';
  }

  for (let i = 2; i < directions.length; i += 2) {
    if (compass === 'north' && directions[i] === 'right') {
      output.east += directions[i + 1];
      compass = 'east';
    } else if (compass === 'east' && directions[i] === 'right') {
      output.north -= directions[i + 1];
      compass = 'south';
    } else if (compass === 'south' && directions[i] === 'right') {
      output.east -= directions[i + 1];
      compass = 'west';
    } else if (compass === 'west' && directions[i] === 'right') {
      output.north += directions[i + 1];
      compass = 'north';
    } else if (compass === 'north' && directions[i] === 'left') {
      output.east -= directions[i + 1];
      compass = 'west';
    } else if (compass === 'east' && directions[i] === 'left') {
      output.north += directions[i + 1];
      compass = 'north';
    } else if (compass === 'south' && directions[i] === 'left') {
      output.east += directions[i + 1];
      compass = 'east';
    } else if (compass === 'west' && directions[i] === 'left') {
      output.north -= directions[i + 1];
      compass = 'south';
    }
  }
  return output;
};








console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));