import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPhoneDuotoneIcon],svg[iconamoon-phone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19.506 7.96A16.03 16.03 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.998-1.05a10 10 0 0 0 2.656-.639l1.52 1.52a12.05 12.05 0 0 0 5.657-5.657l-1.52-1.52a10 10 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.21 0 4.051 1.819 3.506 3.96" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.506 7.96A16.03 16.03 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.998-1.05a10 10 0 0 0 2.656-.639l1.52 1.52a12.05 12.05 0 0 0 5.657-5.657l-1.52-1.52a10 10 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.21 0 4.051 1.819 3.506 3.96"></svg:path></svg:g>`,
})
export class IconamoonPhoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
