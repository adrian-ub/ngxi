import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePeasIcon],svg[icon-park-outline-peas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 12s7 7 7 16s-4.445 16.223-8 16c-3.556-.223-7-7-6-16s7-16 7-16m0 0s1-4.124 4-6.062S39.89 9 39 12s-4 3-5 0s4-6.5 7-6.062S44.257 11.18 44 14c-.501 5.5-2 10-2 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 12s0 8-7 16s-13.675 9.7-16 7s0-10 7-17s16-6 16-6"></svg:path><svg:circle cx="27.243" cy="27.408" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="26.243" cy="34.408" r="2.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlinePeasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
