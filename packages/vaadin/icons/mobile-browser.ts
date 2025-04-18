import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMobileBrowserIcon],svg[vaadin-mobile-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H3v5H0v11h7v-3h9zM6 1h9v1H6zM4 1h1v1H4zm0 14H3v-1h1zm2-2H1V6h5zm9-1H7V5H4V3h11z"></svg:path>`,
})
export class VaadinMobileBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
