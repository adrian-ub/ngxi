import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCreditCardPrintIcon],svg[pepicons-credit-card-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.5 6h12A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 3 15.5v-7A2.5 2.5 0 0 1 5.5 6Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M16 4H4a2.5 2.5 0 0 0-2.5 2.5v7A2.5 2.5 0 0 0 4 16h12a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 16 4ZM2.5 6.5A1.5 1.5 0 0 1 4 5h12a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 16 15H4a1.5 1.5 0 0 1-1.5-1.5v-7Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5Zm3.5 3H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Zm-1 2v-1h1v1H5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsCreditCardPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
