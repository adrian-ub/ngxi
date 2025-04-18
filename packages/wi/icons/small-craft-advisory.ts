import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiSmallCraftAdvisoryIcon],svg[wi-small-craft-advisory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.81 24.6V7.45h1.03V24.6zm1.73-9.74V7.45l8.65 3.69z"></svg:path>`,
})
export class WiSmallCraftAdvisoryIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
