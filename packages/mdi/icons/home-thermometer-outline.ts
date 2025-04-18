import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeThermometerOutlineIcon],svg[mdi-home-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8a2 2 0 0 1 2 2v6.76c.61.55 1 1.35 1 2.24c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.89.39-1.69 1-2.24V10c0-1.1.9-2 2-2m0 1c-.55 0-1 .45-1 1v1h2v-1c0-.55-.45-1-1-1m-7-3.31l-5 4.5V18h7.1l-.1 1l.1 1H5v-8H2l10-9l4.4 3.96c-.51.44-.9 1.01-1.15 1.65z"></svg:path>`,
})
export class MdiHomeThermometerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
