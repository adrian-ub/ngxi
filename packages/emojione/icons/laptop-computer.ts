import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLaptopComputerIcon],svg[emojione-laptop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212528" d="M7.3 53.8h49.4c.8 0 1.4-.6 1.4-1.4v-33c0-.8-.6-1.4-1.4-1.4H7.3c-.7 0-1.3.6-1.3 1.4v33c0 .8.6 1.4 1.3 1.4M2 58.7C2 60.3 3.3 62 5 62h54c1.6 0 3-1.7 3-3.3z"></svg:path><svg:path fill="#ddd" d="M57 53.8H7l-5 4.9h60z"></svg:path><svg:path fill="#bfbebe" d="M55.3 54.2H8.7l-1.7 2h50z"></svg:path><svg:path fill="#212528" d="M37.1 57.1H26.9l-.8 1.1h11.8z"></svg:path><svg:path fill="#3e4347" d="M9 21h46v29.8H9z"></svg:path><svg:circle cx="32" cy="19.6" r=".8" fill="#ddd"></svg:circle><svg:path fill="#3e4347" d="M36.3 60.8h-8.6c-.3 0-1.1 0-1.1-1h10.8c0 1-.8 1-1.1 1"></svg:path>`,
})
export class EmojioneLaptopComputerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
