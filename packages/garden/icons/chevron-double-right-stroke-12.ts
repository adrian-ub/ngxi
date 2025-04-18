import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleRightStroke12Icon],svg[garden-chevron-double-right-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.911 6.284l-.057.07l-4 4a.5.5 0 0 1-.765-.638l.057-.07L4.793 6L1.146 2.354a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057l.07.057l4 4a.5.5 0 0 1 .057.638m5 0l-.057.07l-4 4a.5.5 0 0 1-.765-.638l.057-.07L9.793 6L6.146 2.354a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057l.07.057l4 4a.5.5 0 0 1 .057.638"></svg:path>`,
})
export class GardenChevronDoubleRightStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
