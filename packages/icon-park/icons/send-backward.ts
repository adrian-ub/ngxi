import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSendBackwardIcon],svg[icon-park-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="8" fill="#2F88FF" transform="matrix(1 0 0 -1 6 14)"></svg:rect><svg:rect width="36" height="8" fill="#2F88FF" transform="matrix(1 0 0 -1 6 28)"></svg:rect><svg:path stroke-linecap="round" d="M30 36L24 42L18 36V36"></svg:path><svg:path stroke-linecap="round" d="M24 42V28"></svg:path><svg:path stroke-linecap="round" d="M24 14V20"></svg:path></svg:g>`,
})
export class IconParkSendBackwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
