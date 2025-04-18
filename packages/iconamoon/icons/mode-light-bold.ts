import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonModeLightBoldIcon],svg[iconamoon-mode-light-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2.5"><svg:circle cx="12" cy="12" r="4" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"></svg:path></svg:g>`,
})
export class IconamoonModeLightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
