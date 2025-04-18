import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageFlash1FlashPowerConnectChargeElectricityLightningIcon],svg[streamline-image-flash-1-flash-power-connect-charge-electricity-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.25.5L2 5.81a.5.5 0 0 0 .46.69h2.79l-2 7l8.59-8.14a.5.5 0 0 0-.34-.86H7.75l2-4Z"></svg:path>`,
})
export class StreamlineImageFlash1FlashPowerConnectChargeElectricityLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
