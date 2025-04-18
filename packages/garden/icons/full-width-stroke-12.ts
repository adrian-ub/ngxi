import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFullWidthStroke12Icon],svg[garden-full-width-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 11a.5.5 0 1 0 0-1h-9a.5.5 0 1 0 0 1zM2 3h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 1v4h8V4zm-.5-3a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class GardenFullWidthStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
