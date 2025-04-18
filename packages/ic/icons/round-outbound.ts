import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundOutboundIcon],svg[ic-round-outbound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1.88 9.54l-4.25 4.25a.996.996 0 1 1-1.41-1.41l4.25-4.25l-1.27-1.27a.503.503 0 0 1 .35-.86h3.94c.28 0 .5.22.5.5v3.94c0 .45-.54.67-.85.35z"></svg:path>`,
})
export class IcRoundOutboundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
