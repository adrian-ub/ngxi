import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailSearchIcon],svg[icon-park-email-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24V9H24H4V24V39H24"></svg:path><svg:circle cx="36" cy="34" r="5" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 37L44 40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkEmailSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
