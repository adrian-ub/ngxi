import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioIcon],svg[icon-park-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="38" height="28" x="5" y="13" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:circle cx="18" cy="28" r="6" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 24L36 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 32L36 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 13L25 4"></svg:path></svg:g>`,
})
export class IconParkRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
