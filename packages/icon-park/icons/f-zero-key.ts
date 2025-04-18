import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFZeroKeyIcon],svg[icon-park-f-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="16" x="26" y="16" fill="#2F88FF" stroke="#fff" rx="4"></svg:rect><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
