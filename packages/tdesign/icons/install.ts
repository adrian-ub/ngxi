import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallIcon],svg[tdesign-install-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v7.11l2.508-2.48l1.406 1.422L12 12.91L7.086 8.052L8.492 6.63L11 9.11V2zM2 2h7v2H4v10h16V4h-5V2h7v20H2zm18 14H4v4h16zm-14.002.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignInstallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
