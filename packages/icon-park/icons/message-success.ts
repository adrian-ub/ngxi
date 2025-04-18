import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSuccessIcon],svg[icon-park-message-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 36H21L11 41V36H4V6H44V17"></svg:path><svg:path d="M12 14H15L18 14"></svg:path><svg:path d="M12 20H18L24 20"></svg:path><svg:path d="M29 30L35 35L44 24"></svg:path></svg:g>`,
})
export class IconParkMessageSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
