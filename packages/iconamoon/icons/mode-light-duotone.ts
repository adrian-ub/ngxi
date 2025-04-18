import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonModeLightDuotoneIcon],svg[iconamoon-mode-light-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="4" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="4" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"></svg:path></svg:g>`,
})
export class IconamoonModeLightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
