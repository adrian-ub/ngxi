import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronRightStroke12Icon],svg[garden-chevron-right-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.646 10.354a.5.5 0 0 1-.057-.638l.057-.07L7.293 6L3.646 2.354a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057l.07.057l4 4a.5.5 0 0 1 .057.638l-.057.07l-4 4a.5.5 0 0 1-.708 0"></svg:path>`,
})
export class GardenChevronRightStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
