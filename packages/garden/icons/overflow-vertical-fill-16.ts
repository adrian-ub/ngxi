import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowVerticalFill16Icon],svg[garden-overflow-vertical-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class GardenOverflowVerticalFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
