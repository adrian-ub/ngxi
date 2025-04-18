import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinServerIcon],svg[vaadin-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v3h10V5zm4 2H4V6h3zM3 4h10l-2-4H5zm0 8h10V9H3zm8-2h1v1h-1zm-2 0h1v1H9zm-6 6h10v-3H3zm1-2h3v1H4z"></svg:path>`,
})
export class VaadinServerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
