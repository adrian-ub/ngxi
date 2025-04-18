import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowVerticalStroke16Icon],svg[garden-overflow-vertical-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class GardenOverflowVerticalStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
