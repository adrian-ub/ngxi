import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronUpFill12Icon],svg[garden-chevron-up-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.707 8.707a1 1 0 0 1-1.32.083l-.094-.083L6 5.415L2.707 8.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l4-4a1 1 0 0 1 1.32-.083l.094.083l4 4a1 1 0 0 1 0 1.414"></svg:path>`,
})
export class GardenChevronUpFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
