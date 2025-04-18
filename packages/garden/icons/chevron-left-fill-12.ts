import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronLeftFill12Icon],svg[garden-chevron-left-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.707 1.293a1 1 0 0 1 .083 1.32l-.083.094L5.415 6l3.292 3.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083l-4-4a1 1 0 0 1-.083-1.32l.083-.094l4-4a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class GardenChevronLeftFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
