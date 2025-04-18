import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGoproIcon],svg[icon-park-gopro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="13" height="34" x="5" y="7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="19" height="22" x="24" y="13" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:circle cx="33.5" cy="24.5" r="3.5" fill="#43CCF8" stroke="#fff" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 24H24"></svg:path><svg:rect width="5" height="5" x="9" y="15" fill="#000" rx="2.5"></svg:rect></svg:g>`,
})
export class IconParkGoproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
