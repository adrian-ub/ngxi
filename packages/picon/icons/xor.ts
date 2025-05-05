import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconXorIcon],svg[picon-xor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V0h6v2h2v6H2V6M1 1v4h1V2h3V1M3 6v1h4V3H6v3"></svg:path>`,
})
export class PiconXorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
