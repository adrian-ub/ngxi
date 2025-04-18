import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleRightFill12Icon],svg[garden-chevron-double-right-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.79 6.613l-.083.094l-4 4A1 1 0 0 1 .21 9.387l.083-.094L3.585 6L.293 2.707a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083l4 4a1 1 0 0 1 .083 1.32m6 0l-.083.094l-4 4a1 1 0 0 1-1.497-1.32l.083-.094L9.585 6L6.293 2.707a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083l4 4a1 1 0 0 1 .083 1.32"></svg:path>`,
})
export class GardenChevronDoubleRightFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
