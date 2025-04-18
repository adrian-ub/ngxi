import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextItalicLinearIcon],svg[solar-text-italic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 22h12M9 2h12M9 22l6-20"></svg:path>`,
})
export class SolarTextItalicLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
