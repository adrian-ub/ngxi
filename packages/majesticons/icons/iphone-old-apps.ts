import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsIphoneOldAppsIcon],svg[majesticons-iphone-old-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3 1.001a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0zm4 1a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v.001a1 1 0 0 1-1 1m2-1a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0zm-5 4a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v.001a1 1 0 0 1-1 1m2-1a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0zm4 1a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v.001a1 1 0 0 1-1 1m-7 2a1 1 0 1 0 2 0V12a1 1 0 1 0-2 0zm4 1a1 1 0 0 1-1-1V12a1 1 0 1 1 2 0v.001a1 1 0 0 1-1 1m-1 5a1 1 0 1 0 2 0V18a1 1 0 1 0-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsIphoneOldAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
