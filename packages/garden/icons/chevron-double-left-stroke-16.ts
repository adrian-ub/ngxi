import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleLeftStroke16Icon],svg[garden-chevron-double-left-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.812 13.39a.5.5 0 0 1-.64-.012l-.062-.066l-4-5a.5.5 0 0 1-.054-.542l.054-.082l4-5a.5.5 0 0 1 .83.55l-.05.074L4.141 8l3.75 4.688a.5.5 0 0 1-.079.702m5 0a.5.5 0 0 1-.64-.012l-.062-.066l-4-5a.5.5 0 0 1-.054-.542l.054-.082l4-5a.5.5 0 0 1 .83.55l-.05.074L9.141 8l3.75 4.688a.5.5 0 0 1-.079.702"></svg:path>`,
})
export class GardenChevronDoubleLeftStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
