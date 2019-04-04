function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(element);
    };
  });
}

function actionWhenFound(element) {
  console.log("Found " + element + "!" );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);