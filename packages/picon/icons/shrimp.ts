import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShrimpIcon],svg[picon-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0q0 3-4 3C1 3 1 7 4 7l3-1l1 2H4c-5 0-5-7 0-8m1 2h1V1H5m1 1l2 2l-1-2.5L6 5"></svg:path>`,
})
export class PiconShrimpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
