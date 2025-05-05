import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSofaIcon],svg[picon-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4h1v1M0 5V4h1v1m0 3V6h6v2H6V7H2v1m4-3H2V2l1-1h2l1 1"></svg:path>`,
})
export class PiconSofaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
