import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinClipboardCrossIcon],svg[vaadin-clipboard-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1V0H5v1H3v1H2v14h12v-1h1V1zM6 1h4v2H6zm7 14H3V3h2v1h6V3h2z"></svg:path><svg:path fill="currentColor" d="M11 8H9V6H7v2H5v2h2v2h2v-2h2z"></svg:path>`,
})
export class VaadinClipboardCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
