import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronRightFill12Icon],svg[garden-chevron-right-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.293 10.707a1 1 0 0 1-.083-1.32l.083-.094L6.585 6L3.293 2.707a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083l4 4a1 1 0 0 1 .083 1.32l-.083.094l-4 4a1 1 0 0 1-1.414 0"></svg:path>`,
})
export class GardenChevronRightFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
