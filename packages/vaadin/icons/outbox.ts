import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinOutboxIcon],svg[vaadin-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v6h4V5h2L8 0L4 5z"></svg:path><svg:path fill="currentColor" d="M13 2h-2l.9 1h.4l2.6 8H11v2H5v-2H1.1l2.6-8h.4L5 2H3l-3 9v5h16v-5z"></svg:path>`,
})
export class VaadinOutboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
