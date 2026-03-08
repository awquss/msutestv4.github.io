const dataRoot = new URL("../data/", import.meta.url);

export const DATA_PATHS = {
  schema: new URL("tehdit/schema/scenario.schema.json", dataRoot).toString(),
  platforms: new URL("tehdit/platforms.json", dataRoot).toString(),
  weapons: new URL("tehdit/weapons.json", dataRoot).toString(),
  ballistics: new URL("tehdit/ballistic.json", dataRoot).toString()
};

export const DEFAULTS = {
  attackTarget: { x: 0, y: 0 },
  mapScale: 1000,
  totTime: 900,
  launchTime: 0,
  impactTot: 0,
  zoom: 0.5
};
