import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCountingIcon],svg[eos-icons-counting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v20H2z"></svg:path><svg:path fill="currentColor" d="M22 4v2H2V4z"></svg:path><svg:path fill="currentColor" d="M20 2h2v20h-2z"></svg:path><svg:circle cx="8" cy="5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 10v2H2v-2z"></svg:path><svg:circle cx="10" cy="11" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="11" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 16v2H2v-2zm2 5v2H0v-2z"></svg:path><svg:circle cx="8" cy="17" r="2" fill="currentColor"></svg:circle>`,
})
export class EosIconsCountingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
