import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleUpStroke12Icon],svg[garden-chevron-double-up-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.284 6.089l.07.057l4 4a.5.5 0 0 1-.638.765l-.07-.057L6 7.207l-3.646 3.647a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07l4-4a.5.5 0 0 1 .638-.057m0-5l.07.057l4 4a.5.5 0 0 1-.638.765l-.07-.057L6 2.207L2.354 5.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07l4-4a.5.5 0 0 1 .638-.057"></svg:path>`,
})
export class GardenChevronDoubleUpStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
