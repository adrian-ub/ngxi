import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmericaIcon],svg[picon-america-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m4 0V3h1l1-2H2l3 4v2.5L7 4"></svg:path>`,
})
export class PiconAmericaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
