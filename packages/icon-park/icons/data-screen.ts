import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDataScreenIcon],svg[icon-park-data-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" d="M24 36V43"></svg:path><svg:path stroke="#fff" d="M32 14L16 28"></svg:path><svg:path stroke="#000" d="M10 43H38"></svg:path><svg:circle cx="15" cy="17" r="3" fill="#43CCF8" stroke="#fff"></svg:circle><svg:circle cx="33" cy="25" r="3" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkDataScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
