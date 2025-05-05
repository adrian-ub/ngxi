import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCelciusIcon],svg[picon-celcius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1H1v1h1m1 1H0V0h3m4 7H4V2h3l1 1H5v3h3"></svg:path>`,
})
export class PiconCelciusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
