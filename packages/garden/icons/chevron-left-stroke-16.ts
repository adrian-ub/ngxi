import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronLeftStroke16Icon],svg[garden-chevron-left-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.39 12.688a.5.5 0 0 1-.718.69l-.062-.066l-4-5a.5.5 0 0 1-.054-.542l.054-.082l4-5a.5.5 0 0 1 .83.55l-.05.074L6.641 8z"></svg:path>`,
})
export class GardenChevronLeftStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
