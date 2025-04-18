import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinInboxIcon],svg[vaadin-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6V0H6v6H4l4 5l4-5z"></svg:path><svg:path fill="currentColor" d="M13 1h-2v1h1.3l2.6 8H11v2H5v-2H1.1l2.6-8H5V1H3l-3 9v5h16v-5z"></svg:path>`,
})
export class VaadinInboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
