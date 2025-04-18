import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaMedicineOutlineIcon],svg[cuida-medicine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="medicine-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="m19.873 12.3l-8.033 7.998a5.678 5.678 0 0 1-8.012-8.047l8.033-7.998a5.678 5.678 0 0 1 8.012 8.047m-1.4-6.618a3.68 3.68 0 0 0-5.2-.012l-8.034 7.998a3.678 3.678 0 0 0 5.19 5.213l8.033-7.998a3.68 3.68 0 0 0 .012-5.201Z"></svg:path><svg:path d="M8.118 8.524a1 1 0 0 1 1.414 0l6.05 6.05a1 1 0 0 1-1.414 1.414l-6.05-6.05a1 1 0 0 1 0-1.414"></svg:path></svg:g></svg:g>`,
})
export class CuidaMedicineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
