import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBackspaceIcon],svg[vaadin-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm13 7H6v2L3 8l3-3v2h7z"></svg:path>`,
})
export class VaadinBackspaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
