import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBabySlingIcon],svg[icon-park-solid-baby-sling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="10" r="5" fill="currentColor"></svg:circle><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 21C14 21 11 6 11 6L6 8l3 16.5c1.167.667 5.5 3 8 6.5s2 7 7.5 7s6-4.5 7.5-7s5.667-6 7-6.5L42 8l-5-2s-3 15-13 15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 29s7 4 7 13h-5c0-6-5-9-5-9m-16-4s-7 4-7 13h5c0-6 5-9 5-9"></svg:path></svg:g>`,
})
export class IconParkSolidBabySlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
