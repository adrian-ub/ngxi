import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsQuotaIcon],svg[eos-icons-quota-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12V3h-1a10 10 0 1 0 10 10v-1Z"></svg:path><svg:path fill="currentColor" d="M14 10V1a9 9 0 0 1 9 9Z"></svg:path>`,
})
export class EosIconsQuotaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
