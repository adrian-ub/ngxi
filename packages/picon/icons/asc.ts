import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAscIcon],svg[picon-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 8L0 6h1V0h1v6h1m0-5V0h1v1M3 3V2h3v1M3 5V4h5v1"></svg:path>`,
})
export class PiconAscIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
