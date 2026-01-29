function randomName() {
  return {
    names: ["April","Andy","Leslie","Ron","Ann","Ben","Tom","Gerry","Donna","Chris"],
    name: "",
    num() {
      this.name = this.names[Math.floor(Math.random() * this.names.length)];
    }
  };
}
