import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkModifyTwoIcon],svg[icon-park-modify-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="40" height="30" x="4" y="9" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 9V39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 9H12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 39H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23 31L37 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M25 19L23 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M37 31L35 29"></svg:path></svg:g>`,
})
export class IconParkModifyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
