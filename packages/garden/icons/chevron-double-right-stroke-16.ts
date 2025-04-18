import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleRightStroke16Icon],svg[garden-chevron-double-right-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.188 2.61a.5.5 0 0 1 .64.013l.062.065l4 5a.5.5 0 0 1 .054.542l-.054.082l-4 5a.5.5 0 0 1-.83-.55l.05-.074L11.859 8l-3.75-4.688a.5.5 0 0 1 .079-.702m-5 0a.5.5 0 0 1 .64.013l.062.065l4 5a.5.5 0 0 1 .054.542l-.054.082l-4 5a.5.5 0 0 1-.83-.55l.05-.074L6.859 8l-3.75-4.688a.5.5 0 0 1 .079-.702"></svg:path>`,
})
export class GardenChevronDoubleRightStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
