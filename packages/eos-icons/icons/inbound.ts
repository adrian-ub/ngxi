import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsInboundIcon],svg[eos-icons-inbound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8v-2H4V6l8 5l8-5v8h2V4a2 2 0 0 0-2-2m-8 7L4 4h16Zm6 4v3h4v2h-4v3l-4-4Z"></svg:path>`,
})
export class EosIconsInboundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
