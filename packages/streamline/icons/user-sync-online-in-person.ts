import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserSyncOnlineInPersonIcon],svg[streamline-user-sync-online-in-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.04 13.448v-2.48h2.48"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.339 5.815a6.449 6.449 0 0 1-11.3 5.308M.661 8.185a6.449 6.449 0 0 1 11.3-5.308"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.96.552v2.48H9.48"></svg:path><svg:path d="M5.75 5.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0"></svg:path><svg:path stroke-linecap="round" d="M4.708 9.5a2.5 2.5 0 0 1 4.584 0"></svg:path></svg:g>`,
})
export class StreamlineUserSyncOnlineInPersonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
