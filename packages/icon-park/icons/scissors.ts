import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScissorsIcon],svg[icon-park-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 19C21 22 21 26 19 29"></svg:path><svg:path stroke="#fff" d="M36 14L21 24L36 34"></svg:path><svg:circle cx="16" cy="16" r="4" stroke="#fff"></svg:circle><svg:circle cx="16" cy="32" r="4" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkScissorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
