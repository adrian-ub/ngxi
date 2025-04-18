import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSortAmountDescIcon],svg[icomoon-free-sort-amount-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12V0H3v12H.5L4 15.5L7.5 12zM7 0h9v2H7zm0 3h7v2H7zm0 3h5v2H7z"></svg:path><svg:path fill="currentColor" d="M7 9h3v2H7z"></svg:path>`,
})
export class IcomoonFreeSortAmountDescIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
