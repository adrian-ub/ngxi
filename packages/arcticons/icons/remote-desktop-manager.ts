import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRemoteDesktopManagerIcon],svg[arcticons-remote-desktop-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="35.987" height="25.284" x="4.5" y="9.851" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.487 22.382H41.5a2 2 0 0 1 2 2v11.766a2 2 0 0 1-2 2H23.06a2 2 0 0 1-2-2v-1.013"></svg:path>`,
})
export class ArcticonsRemoteDesktopManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
