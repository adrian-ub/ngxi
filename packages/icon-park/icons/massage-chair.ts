import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMassageChairIcon],svg[icon-park-massage-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M18 24V15.6522C18 14.4348 19.2 12 24 12C28.8 12 30 14.4348 30 15.6522V24"></svg:path><svg:path stroke="#fff" d="M16 24V30H32V24"></svg:path><svg:path stroke="#fff" d="M12 20V24H36V20"></svg:path><svg:path stroke="#fff" d="M18 36L30 36"></svg:path><svg:path stroke="#fff" d="M24 30V36"></svg:path></svg:g>`,
})
export class IconParkMassageChairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
