import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsQuotaOutlinedIcon],svg[eos-icons-quota-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.93 12A8.054 8.054 0 1 1 12 5.07V3h-1a10 10 0 1 0 10 10v-1Z"></svg:path><svg:path fill="currentColor" d="M20.364 3.636A9 9 0 0 0 14 1v9h9a9 9 0 0 0-2.636-6.364M16 3.294A7.01 7.01 0 0 1 20.706 8H16Z"></svg:path>`,
})
export class EosIconsQuotaOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
