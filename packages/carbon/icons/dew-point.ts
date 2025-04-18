import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDewPointIcon],svg[carbon-dew-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-9.5 26A5.496 5.496 0 0 1 9 24.52c0-3.443 4.344-21.014 4.53-21.76a1 1 0 0 1 1.94 0c.186.746 4.53 18.317 4.53 21.76A5.496 5.496 0 0 1 14.5 30m0-22.756C13.04 13.38 11 22.409 11 24.52a3.5 3.5 0 0 0 7 0c0-2.111-2.04-11.14-3.5-17.276"></svg:path>`,
})
export class CarbonDewPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
