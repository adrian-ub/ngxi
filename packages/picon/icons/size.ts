import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSizeIcon],svg[picon-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7V5H4V4h3v1H6v2M2 2H0V1h5v1H3v5H2"></svg:path>`,
})
export class PiconSizeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
