import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAnnouncementIcon],svg[icon-park-solid-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAnnouncement0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="15" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" d="m24 7l-8 8h16z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 24h18m-18 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAnnouncement0)"></svg:path>`,
})
export class IconParkSolidAnnouncementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
