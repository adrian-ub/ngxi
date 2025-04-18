import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPackageIcon],svg[eos-icons-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v2h2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8h2V6Zm9 12H6v-2h5Z"></svg:path>`,
})
export class EosIconsPackageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
