import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticLineDuotoneIcon],svg[solar-cosmetic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M11 10.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 20v-4m0 4h3m-3 0h-3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm-6 .75h6v-1.5H2zM7.25 11v6h1.5v-6zm-4.5 6v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCosmeticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
