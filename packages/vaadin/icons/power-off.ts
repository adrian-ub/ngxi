import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPowerOffIcon],svg[vaadin-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2.3v3.3c1.2.7 2 2 2 3.4c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5.8-2.8 2-3.4V2.3C3.1 3.2 1 5.8 1 9c0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7"></svg:path><svg:path fill="currentColor" d="M7 1h2v7H7z"></svg:path>`,
})
export class VaadinPowerOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
