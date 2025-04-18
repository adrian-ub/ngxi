import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleLeftFill12Icon],svg[garden-chevron-double-left-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.21 5.387l.083-.094l4-4a1 1 0 0 1 1.497 1.32l-.083.094L8.415 6l3.292 3.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083l-4-4a1 1 0 0 1-.083-1.32m-6 0l.083-.094l4-4a1 1 0 0 1 1.497 1.32l-.083.094L2.415 6l3.292 3.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083l-4-4a1 1 0 0 1-.083-1.32"></svg:path>`,
})
export class GardenChevronDoubleLeftFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
