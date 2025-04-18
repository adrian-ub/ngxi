import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSearchIcon],svg[icon-park-message-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:circle cx="34" cy="28" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 32L44 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15H15L18 15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 21H18L24 21"></svg:path></svg:g>`,
})
export class IconParkMessageSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
