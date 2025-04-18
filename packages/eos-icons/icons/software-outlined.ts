import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSoftwareOutlinedIcon],svg[eos-icons-software-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18.315A7.04 7.04 0 0 1 11.263 16H3V4h18v2.264a7.05 7.05 0 0 1 2 2.15V4a2.006 2.006 0 0 0-2-2H3a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h7v2H8v2h8v-2h-2Z"></svg:path><svg:path fill="currentColor" d="M17 6a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:circle cx="17" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class EosIconsSoftwareOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
