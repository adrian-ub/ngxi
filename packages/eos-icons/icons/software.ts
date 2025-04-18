import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSoftwareIcon],svg[eos-icons-software-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18.32A7.06 7.06 0 0 1 11.28 16H3V4h18v2.26a7.1 7.1 0 0 1 2 2.15V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2Z"></svg:path><svg:path fill="currentColor" d="M17 6a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 7.5a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class EosIconsSoftwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
