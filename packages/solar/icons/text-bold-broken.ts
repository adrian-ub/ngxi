import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextBoldBrokenIcon],svg[solar-text-bold-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 12h7a5 5 0 0 0 0-10H7.609A2.61 2.61 0 0 0 5 4.609zm0 0h9a5 5 0 0 1 0 10H7.059C5.922 22 5 21.137 5 20m0-8v3.97"></svg:path>`,
})
export class SolarTextBoldBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
