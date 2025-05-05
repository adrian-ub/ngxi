import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSoupIcon],svg[picon-soup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1H0l2 3h1m0-3H2l2 3h1m3 0c0 5-8 5-8 0"></svg:path>`,
})
export class PiconSoupIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
