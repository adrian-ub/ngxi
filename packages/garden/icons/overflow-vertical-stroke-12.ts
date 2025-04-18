import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowVerticalStroke12Icon],svg[garden-overflow-vertical-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class GardenOverflowVerticalStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
