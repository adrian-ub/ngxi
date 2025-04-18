import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsCrossIcon],svg[vaadin-arrows-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5V1h-4l1.3 1.3L8 6.6L3.7 2.3L5 1H1v4l1.3-1.3L6.6 8l-4.3 4.3L1 11v4h4l-1.3-1.3L8 9.4l4.3 4.3L11 15h4v-4l-1.3 1.3L9.4 8l4.3-4.3z"></svg:path>`,
})
export class VaadinArrowsCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
