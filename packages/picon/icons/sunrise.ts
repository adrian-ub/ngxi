import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSunriseIcon],svg[picon-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 2l2-2l2 2M0 8V7h8v1M0 6l2-1l-1-2l2 1l1-1l1 1l2-1l-1 2l2 1"></svg:path>`,
})
export class PiconSunriseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
