import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInstallFillIcon],svg[ri-install-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v5H8l4 4l4-4h-3V2h7a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 14H5v4h14zm-2 1v2h-2v-2z"></svg:path>`,
})
export class RiInstallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
