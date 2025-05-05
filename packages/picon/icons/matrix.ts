import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMatrixIcon],svg[picon-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V2h4v4H5V3L4 6L3 3m5-3v8H6V7h1V1H6V0M1 1v6h1v1H0V0h2v1"></svg:path>`,
})
export class PiconMatrixIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
