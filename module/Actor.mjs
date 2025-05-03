const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      resources: new SchemaField({
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 2 })
        })
      })
    }
  }
}

class HelldiverActorModel extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      tenets: new SchemaField({
        freedom: new SchemaField({
          base: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 3, initial: 3 }),
        }),
        dominance: new SchemaField({
          base: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 3, initial: 3 }),
        }),
        faith: new SchemaField({
          base: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 3, initial: 3 }),
        }),
        purity: new SchemaField({
          base: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 3, initial: 3 }),
        })
      })
    }
  }
}