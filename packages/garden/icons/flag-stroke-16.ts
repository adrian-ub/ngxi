import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFlagStroke16Icon],svg[garden-flag-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 15.5V.5m0 8h10.8c.4 0 .7-.5.4-.9L11 5l2.6-2.6c.4-.4.1-.9-.3-.9H2.5z"></svg:path>`,
})
export class GardenFlagStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
