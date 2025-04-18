import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPackageUpgradeOutlinedIcon],svg[eos-icons-package-upgrade-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.243 20.243l-2.829-2.829L18 16l-4.249 4.249l1.415 1.414L18 18.829l2.828 2.828zM7 15h4v2H7z"></svg:path><svg:path fill="currentColor" d="M22 6H2v2h2v11a2.003 2.003 0 0 0 2 2h5l7-7l2 2V8h2ZM6 8h12v3l-8 8H6Z"></svg:path>`,
})
export class EosIconsPackageUpgradeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
