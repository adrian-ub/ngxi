import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibBuyselladsIcon],svg[cib-buysellads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 9.419l2.681 10.044h-5.362zM30 5v22c0 1.656-1.344 3-3 3H5c-1.656 0-3-1.344-3-3V5c0-1.656 1.344-3 3-3h22c1.656 0 3 1.344 3 3m-4.081 20.331L20.013 6.662h-8.025L6.082 25.331h5.669l6.981-5.725l1.512 5.725z"></svg:path>`,
})
export class CibBuyselladsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
