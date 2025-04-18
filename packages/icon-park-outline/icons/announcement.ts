import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAnnouncementIcon],svg[icon-park-outline-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="15" rx="2"></svg:rect><svg:path stroke-linecap="round" d="m24 7l-8 8h16zM12 24h18m-18 8h8"></svg:path></svg:g>`,
})
export class IconParkOutlineAnnouncementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
