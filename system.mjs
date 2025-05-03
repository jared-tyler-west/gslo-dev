import { SystemActor } from "./module/documents.mjs";
import { HelldiverDataModel } from "./module/Actor.mjs"

Hooks.once("init", () => {
  CONFIG.Actor.documentClass = SystemActor;
  
  CONFIG.Actor.dataModels = { helldiver: HelldiverDataModel };
  
  CONFIG.Actor.trackableAttributes = {
    helldiver: {
      bar: ["resources.health"]
    }
  }
})