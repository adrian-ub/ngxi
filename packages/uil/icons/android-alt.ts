import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAndroidAltIcon],svg[uil-android-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.992 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m18 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-4.135-5.5a1 1 0 1 0-1.731-1l-.614 1.063a5.93 5.93 0 0 0-5.04 0L8.857 2.5a1 1 0 1 0-1.731 1l.692 1.198A5.98 5.98 0 0 0 5.992 9v8a1 1 0 0 0 1 1h2v3a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 2 0v-3h2a1 1 0 0 0 1-1V9a5.98 5.98 0 0 0-1.827-4.302ZM15.992 16h-8v-5h8Zm-8-7a4 4 0 0 1 8 0Z"></svg:path>`,
})
export class UilAndroidAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
