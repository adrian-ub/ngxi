import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronUpStroke12Icon],svg[garden-chevron-up-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.354 8.354a.5.5 0 0 1-.638.057l-.07-.057L6 4.707L2.354 8.354a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07l4-4a.5.5 0 0 1 .638-.057l.07.057l4 4a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class GardenChevronUpStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
