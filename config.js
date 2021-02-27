const week = {

}
export const ADD_ACTIONS = {
  add_smoke: "add_smoke",
  add_past_smokes: "add_past_smoke",
  add_objectives: "add_objective",

}
export const defaultData = {
  labels: ["Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
  datasets: [{
    data: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8,
    ]
  }
  ],
}

export const actionsOptions = [
  {
    text: "Cigarro pontual",
    icon: require("./images/plus.png"),
    name: ADD_ACTIONS.add_smoke,
    position: 1
  },
  {
    text: "Cigarro passado",
    icon: require("./images/plus.png"),
    name: ADD_ACTIONS.add_past_smokes,
    position: 2
  },
  {
    text: "Meta",
    icon: require("./images/plus.png"),
    name: ADD_ACTIONS.add_objectives,
    position: 3
  }
]
