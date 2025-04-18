import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinExternalBrowserIcon],svg[vaadin-external-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10L8.1 6.8L4.8 10H7v1.8c0 1.7-.9 4.2-4 4.2c4.8 0 6-1.4 6-4.3V10z"></svg:path><svg:path fill="currentColor" d="M0 0v13h6v-1H1V3h14v9h-5v1h6V0zm2 2H1V1h1zm11 0H3V1h10z"></svg:path>`,
})
export class VaadinExternalBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
