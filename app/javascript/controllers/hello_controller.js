import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"];
  connect() {
    console.log("Hello, Stimulus!");
    console.log("button", this.buttonTarget);
  }

  greet() {
    alert("Hello, Stimulus!");
  }
}
