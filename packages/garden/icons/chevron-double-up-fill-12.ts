import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleUpFill12Icon],svg[garden-chevron-double-up-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.613 6.21l.094.083l4 4a1 1 0 0 1-1.32 1.497l-.094-.083L6 8.415l-3.293 3.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l4-4a1 1 0 0 1 1.32-.083m0-6l.094.083l4 4a1 1 0 0 1-1.32 1.497l-.094-.083L6 2.415L2.707 5.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l4-4A1 1 0 0 1 6.613.21"></svg:path>`,
})
export class GardenChevronDoubleUpFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
