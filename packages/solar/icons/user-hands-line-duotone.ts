import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserHandsLineDuotoneIcon],svg[solar-user-hands-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m20 21.5l-.65-5.52C19.15 14.28 17.71 13 16 13H8c-1.71 0-3.15 1.28-3.35 2.98L4 21.5"></svg:path><svg:path d="M8 13v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5" opacity=".5"></svg:path><svg:circle cx="12" cy="6" r="4"></svg:circle></svg:g>`,
})
export class SolarUserHandsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
