import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShieldStroke12Icon],svg[garden-shield-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 11.5c.5 0 4.5-2.5 4.5-7.5V2.5L6 .5l-4.5 2V4c0 5 4 7.5 4.5 7.5z"></svg:path>`,
})
export class GardenShieldStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
