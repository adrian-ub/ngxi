import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsOutboundIcon],svg[eos-icons-outbound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8v-2H4V6l8 5l8-5v7h2V4a2 2 0 0 0-2-2m-8 7L4 4h16Zm10 8l-4 4v-3h-4v-2h4v-3Z"></svg:path>`,
})
export class EosIconsOutboundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
