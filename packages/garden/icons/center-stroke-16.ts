import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCenterStroke16Icon],svg[garden-center-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 14a.5.5 0 1 1 0-1h13a.5.5 0 1 1 0 1zM11 4H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 1v5H5V5zm3.5-4a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class GardenCenterStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
