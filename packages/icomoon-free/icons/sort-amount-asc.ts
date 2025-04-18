import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSortAmountAscIcon],svg[icomoon-free-sort-amount-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12V0H3v12H.5L4 15.5L7.5 12z"></svg:path><svg:path fill="currentColor" d="M7 9h9v2H7zm0-3h7v2H7zm0-3h5v2H7zm0-3h3v2H7z"></svg:path>`,
})
export class IcomoonFreeSortAmountAscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
