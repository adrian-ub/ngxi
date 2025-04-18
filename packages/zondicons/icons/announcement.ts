import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsAnnouncementIcon],svg[zondicons-announcement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6zm8 9v5H8l-1.67-5H5v-2h8v2z"></svg:path>`,
})
export class ZondiconsAnnouncementIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
