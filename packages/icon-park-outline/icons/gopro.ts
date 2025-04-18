import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGoproIcon],svg[icon-park-outline-gopro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 7h13v34H5z"></svg:path><svg:rect width="19" height="22" x="24" y="13" stroke="currentColor" stroke-width="4" rx="3"></svg:rect><svg:circle cx="33.5" cy="24.5" r="3.5" stroke="currentColor" stroke-width="4"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 24h6"></svg:path><svg:rect width="5" height="5" x="9" y="15" fill="currentColor" rx="2.5"></svg:rect></svg:g>`,
})
export class IconParkOutlineGoproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
