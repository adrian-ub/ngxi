import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineOutboundIcon],svg[ic-outline-outbound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1.88 9.54L8.92 16.5l-1.41-1.41l4.96-4.96L10.34 8l5.65.01l.01 5.65z"></svg:path>`,
})
export class IcOutlineOutboundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
