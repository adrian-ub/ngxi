import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFlagIcon],svg[vaadin-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c0-1.1-.9-2-2-2S0 .9 0 2c0 .7.4 1.4 1 1.7V16h2V3.7c.6-.3 1-1 1-1.7m0 2s1-3 3.6-3c2.7 0 2.3 1 4.4 1c2.4 0 4-1 4-1v8s-.7 2-4 2c-2.2 0-2.3-1-5-1c-2.3 0-3 2-3 2z"></svg:path>`,
})
export class VaadinFlagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
