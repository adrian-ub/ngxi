import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBackspaceAIcon],svg[vaadin-backspace-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12L0 8l5-4v2h11v4H5z"></svg:path>`,
})
export class VaadinBackspaceAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
