export class SystemActor extends Actor {
  async applyDamage(damage) {
    damage = Math.round(Math.max(1, damage));

    const { value } = this.system.resources.health;
    await this.update({ "system.resources.health.value": value - damage });

    await ChatMessage.implementation.create({
      content: `${this.name} took ${damage} damage!`
    })
  }
}