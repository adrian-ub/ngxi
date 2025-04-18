import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmApplicationAndDiscoveryDeliveryIntelligenceIcon],svg[carbon-ibm-application-and-discovery-delivery-intelligence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H7v10h2zm19.504 2.136l-12-7a1 1 0 0 0-1.008 0l-4 2.334a1 1 0 0 0-.496.863V13h2V4.908l3-1.75l11 6.416V13h2V9a1 1 0 0 0-.496-.864M4.999 22.432V9H3v14.006a1 1 0 0 0 .496.864L13.993 30L15 28.272zM22 27h2V17h-2zm5 0h2v-6h-2zm-10 0h2v-8h-2z"></svg:path>`,
})
export class CarbonIbmApplicationAndDiscoveryDeliveryIntelligenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
