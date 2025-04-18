import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsClusterOutlinedIcon],svg[eos-icons-cluster-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11H1V1h22ZM3 9h18V3H3Zm20 14H1V13h22ZM3 21h18v-6H3Z"></svg:path><svg:path fill="currentColor" d="M4 5h9v2H4z"></svg:path><svg:circle cx="16" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 17h9v2H4z"></svg:path><svg:circle cx="16" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="18" r="1" fill="currentColor"></svg:circle>`,
})
export class EosIconsClusterOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
