import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextItalicBrokenIcon],svg[solar-text-italic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 22h12M9 2h12M9 22l2.4-8M15 2l-2.4 8"></svg:path>`,
})
export class SolarTextItalicBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
