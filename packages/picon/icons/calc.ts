import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCalcIcon],svg[picon-calc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7V4h1v3M2 7V4h1v3M1 6V5h3v1M1 3V1h5v2M1 7V4h5v3M0 0v8h7V0"></svg:path>`,
})
export class PiconCalcIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
