import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPackageOutlinedIcon],svg[eos-icons-package-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h4v2H8z"></svg:path><svg:path fill="currentColor" d="M2 6v2h2v11a2.003 2.003 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V8h2V6Zm16 13H6V8h12Z"></svg:path>`,
})
export class EosIconsPackageOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
