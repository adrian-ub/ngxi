import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerBoldIcon],svg[ph-shipping-container-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.5 66.8L131.3 36.46a12.1 12.1 0 0 0-5-.34l-105.13 15A20.1 20.1 0 0 0 4 70.94v114.12a20.1 20.1 0 0 0 17.17 19.8l105.13 15a12 12 0 0 0 1.7.12a12 12 0 0 0 3.3-.46l106.2-30.32A20.09 20.09 0 0 0 252 170V86a20.08 20.08 0 0 0-14.5-19.2M92 116h-8V66.41l32-4.57v132.32l-32-4.57V140h8a12 12 0 0 0 0-24M28 74.41l32-4.57V116h-8a12 12 0 0 0 0 24h8v46.16l-32-4.57ZM228 167l-88 25.14V63.91l88 25.14Z"></svg:path>`,
})
export class PhShippingContainerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
