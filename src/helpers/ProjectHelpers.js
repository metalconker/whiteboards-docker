import { Asset } from "expo-asset";
import { Image } from "expo";
import * as ConstantsMuscles from "../../app/code/controller/muscles/ConstantsMuscles";

export function IntToDay(day)
{
  return 
}
export function PreloadImages() {
  // Preloads all the images
  Asset.fromModule(
    require("../../app/assets/images/whiteboard/Whiteboard.png")
  ).downloadAsync();

  // Muscles preloader
  PreloadMuscles();
}

function PreloadMuscles() {
  // Muscles preloader
  Asset.fromModule(
    require("../../app/database/muscles/MaleBody.png")
  ).downloadAsync();
  for (var key of Object.keys(ConstantsMuscles.MuscleImages)) {
    var red = ConstantsMuscles.MuscleImages[key]["red"];
    var green = ConstantsMuscles.MuscleImages[key]["green"];
    var blue = ConstantsMuscles.MuscleImages[key]["blue"];
    Asset.fromModule(red).downloadAsync();
    Asset.fromModule(green).downloadAsync();
    Asset.fromModule(blue).downloadAsync();
  }
}
