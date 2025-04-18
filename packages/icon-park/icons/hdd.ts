import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHddIcon],svg[icon-park-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="40" x="9" y="4" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="32" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="16" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle><svg:circle cx="16" cy="38" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30C28.4183 30 32 26.4183 32 22C32 17.5817 28.4183 14 24 14C19.5817 14 16 17.5817 16 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 22L18 28"></svg:path></svg:g>`,
})
export class IconParkHddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
