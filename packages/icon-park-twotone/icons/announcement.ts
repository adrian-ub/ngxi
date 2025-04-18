import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAnnouncementIcon],svg[icon-park-twotone-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAnnouncement0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="15" fill="#555" rx="2"></svg:rect><svg:path fill="#555" stroke-linecap="round" d="m24 7l-8 8h16z"></svg:path><svg:path stroke-linecap="round" d="M12 24h18m-18 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAnnouncement0)"></svg:path>`,
})
export class IconParkTwotoneAnnouncementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
