let uid = 0

export const createUid = {
  beforeCreate() {
    this.uid = uid.toString()
    uid += 1
  }
}
