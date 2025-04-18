import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFlagStroke12Icon],svg[garden-flag-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 11.5V.5m0 6h8.3c.4 0 .7-.5.4-.9L8.5 4l1.6-1.6c.3-.3.1-.9-.4-.9H1.5z"></svg:path>`,
})
export class GardenFlagStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
