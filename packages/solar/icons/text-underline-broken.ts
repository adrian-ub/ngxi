import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextUnderlineBrokenIcon],svg[solar-text-underline-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21h16M4 3v6a7.99 7.99 0 0 0 3 6.245M20 3v6a8 8 0 0 1-8 8"></svg:path>`,
})
export class SolarTextUnderlineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
