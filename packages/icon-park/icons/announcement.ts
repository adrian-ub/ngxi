import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnnouncementIcon],svg[icon-park-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="15" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" d="M24 7L16 15H32L24 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 24H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 32H20"></svg:path></svg:g>`,
})
export class IconParkAnnouncementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
