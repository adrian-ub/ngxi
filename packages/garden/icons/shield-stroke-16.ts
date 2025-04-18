import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShieldStroke16Icon],svg[garden-shield-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8 15.5S14.5 13 14.5 5V3L8 .5L1.5 3v2C1.5 13 8 15.5 8 15.5z"></svg:path>`,
})
export class GardenShieldStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
