import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBarcodeOutlineIcon],svg[flowbite-barcode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="2" d="M2.992 4.983v13.934m6.97-13.934v13.934m5.976-13.934v13.934m2.987-13.934v13.934"></svg:path><svg:path d="M5.48 4.483v14.934M7.47 4.483v14.934M21.413 4.483v14.934M13.446 4.483v14.934"></svg:path></svg:g>`,
})
export class FlowbiteBarcodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
