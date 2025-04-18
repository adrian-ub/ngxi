import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOverflowVerticalFill12Icon],svg[garden-overflow-vertical-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class GardenOverflowVerticalFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
