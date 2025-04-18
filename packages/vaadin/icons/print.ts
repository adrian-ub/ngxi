import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPrintIcon],svg[vaadin-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10v4h2v2h12v-2h2v-4zm13 5H3v-3h10zm-1-9V2L9.3 0H4v6H0v3h16V6zM9 1l1.3 1H9zm2 6H5V1h3v2h3zm4 1h-1V7h1z"></svg:path>`,
})
export class VaadinPrintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
