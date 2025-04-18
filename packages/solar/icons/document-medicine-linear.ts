import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineLinearIcon],svg[solar-document-medicine-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path stroke-linecap="round" d="M12 6v2m0 0v2m0-2h-2m2 0h2m-6 6h8m-7 4h6"></svg:path></svg:g>`,
})
export class SolarDocumentMedicineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
