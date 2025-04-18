import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPackagesOutlinedIcon],svg[eos-icons-packages-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v2H4zm2-4h12v2H6zm-4 8v2h2v8a2.003 2.003 0 0 0 2 2h12a2.006 2.006 0 0 0 2.004-2L20 12h2v-2Zm16 10H6v-8h12Z"></svg:path><svg:path fill="currentColor" d="M8 17h4v2H8z"></svg:path>`,
})
export class EosIconsPackagesOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
