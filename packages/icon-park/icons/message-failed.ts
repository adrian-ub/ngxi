import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageFailedIcon],svg[icon-park-message-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:path d="M12 15H15L18 15"></svg:path><svg:path d="M12 21H18L24 21"></svg:path><svg:path d="M32 25L44 37"></svg:path><svg:path d="M44 25L32 37"></svg:path></svg:g>`,
})
export class IconParkMessageFailedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
