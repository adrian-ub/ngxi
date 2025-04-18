import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPrinterIcon],svg[ps-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 128h-42V0H85v128H43q-18 0-30.5 12.5T0 171v213h85v128h342V384h85V171q0-18-12.5-30.5T469 128M128 43h256v85H128zm256 426H128V299h256zm85-128h-42v-85H85v85H43V171h426zm-42-128q0 9-6.5 15.5T405 235q-8 0-14.5-6.5T384 213q0-8 6.5-14.5T405 192q9 0 15.5 6.5T427 213M149 320h214v43H149zm0 64h214v43H149z"></svg:path>`,
})
export class PsPrinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
