import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChevronDownSmallIcon],svg[vaadin-chevron-down-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12L1.68 5.68L3.35 4L8 8.65L12.65 4l1.67 1.68z"></svg:path>`,
})
export class VaadinChevronDownSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
