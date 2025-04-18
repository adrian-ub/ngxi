import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUninstallIcon],svg[tdesign-uninstall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.594l4.914 4.858l-1.406 1.422L13 5.394v7.11h-2v-7.11l-2.508 2.48l-1.406-1.422zM2 2h5.5v2H4v10h16V4h-3.5V2H22v20H2zm18 14H4v4h16zm-14.002.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignUninstallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
