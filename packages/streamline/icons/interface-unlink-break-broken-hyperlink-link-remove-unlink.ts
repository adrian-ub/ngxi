import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUnlinkBreakBrokenHyperlinkLinkRemoveUnlinkIcon],svg[streamline-interface-unlink-break-broken-hyperlink-link-remove-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.54 9.7l2-2l2.12-2.12a3 3 0 0 0 0-4.24h0a3 3 0 0 0-4.24 0L7 2.76L5.46 4.3M3.5 6.26L1.38 8.38a3 3 0 0 0 0 4.24h0a3 3 0 0 0 4.24 0l1-1M4.17 2.05l5.66 9.9"></svg:path>`,
})
export class StreamlineInterfaceUnlinkBreakBrokenHyperlinkLinkRemoveUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
