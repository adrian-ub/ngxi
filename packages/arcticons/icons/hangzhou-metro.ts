import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHangzhouMetroIcon],svg[arcticons-hangzhou-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.621 22.36a5.452 5.452 0 0 1 10.904 0v8.723M14.621 16.908v14.175m10.905-8.723a5.452 5.452 0 0 1 10.904 0v8.723"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.364 45.232A21.497 21.497 0 0 1 14.577 4.677m8.673-2.162a21.498 21.498 0 0 1 13.081 39.094m.109-10.521l-.108 10.522M14.631 16.912l-.054-12.235"></svg:path>`,
})
export class ArcticonsHangzhouMetroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
