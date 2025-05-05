import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWeightIcon],svg[picon-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3q0-3 3-3h2q3 0 3 3v2q0 3-3 3H3Q0 8 0 5m2-3h1l1-1v1h2V1H2"></svg:path>`,
})
export class PiconWeightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
