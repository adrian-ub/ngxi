import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCoinYenIcon],svg[icomoon-free-coin-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path><svg:path fill="currentColor" d="M9.5 9a.5.5 0 0 0 0-1H8.434l1.482-2.223a.5.5 0 1 0-.832-.554L7.5 7.599L5.916 5.223a.5.5 0 1 0-.832.554L6.566 8H5.5a.5.5 0 0 0 0 1H7v1H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H8V9z"></svg:path>`,
})
export class IcomoonFreeCoinYenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
