import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsBootstrappingIcon],svg[eos-icons-bootstrapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22h18v2H3zm9-10c-12 0-9 9-9 9h18s3-9-9-9"></svg:path><svg:path fill="currentColor" d="m3 0l1 13c1.22-1.6 3.46-2.51 8-2.51s6.81.93 8 2.53L21 0Zm4 3h10v2H7Zm11 6H6V7h12Z"></svg:path>`,
})
export class EosIconsBootstrappingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
