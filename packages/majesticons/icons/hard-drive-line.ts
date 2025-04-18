import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHardDriveLineIcon],svg[majesticons-hard-drive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10m-6 3h3"></svg:path>`,
})
export class MajesticonsHardDriveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
