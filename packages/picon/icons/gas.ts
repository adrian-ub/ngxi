import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGasIcon],svg[picon-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h5v7l1 1H0l1-1m1-4h3V1H2m4 4h1V3L6 2V1h2v5H6"></svg:path>`,
})
export class PiconGasIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
