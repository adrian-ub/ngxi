import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPackageUpgradeIcon],svg[eos-icons-package-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.77 14.25L20 16.49V8h2V6H2v2h2v11a2 2 0 0 0 2 2h5ZM6 16h5v2H6Z"></svg:path><svg:path fill="currentColor" d="m22.01 20.53l-2.83-2.83l-1.41-1.41l-4.25 4.25l1.41 1.41l2.84-2.83l2.83 2.83z"></svg:path>`,
})
export class EosIconsPackageUpgradeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
