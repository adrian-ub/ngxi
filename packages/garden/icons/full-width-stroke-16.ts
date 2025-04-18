import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFullWidthStroke16Icon],svg[garden-full-width-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 13a.5.5 0 1 1 0 1h-13a.5.5 0 1 1 0-1zM14 4H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 1v5H2V5zm.5-4a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class GardenFullWidthStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
