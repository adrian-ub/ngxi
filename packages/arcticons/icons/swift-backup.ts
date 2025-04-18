import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwiftBackupIcon],svg[arcticons-swift-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.444 25.179L7.556 5.5m27.792 30.21L7.556 19.08v13.58L24 42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.444 25.179v7.481L24 42.5m16.444-37v7.481L30.251 19.08M7.556 5.5h32.888"></svg:path>`,
})
export class ArcticonsSwiftBackupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
