import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpClosedCaptionDisabledIcon],svg[ic-sharp-closed-caption-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H21v14.17L17.83 15H18v-2h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18V9h-5v1.17zm12.95 18.61L17.17 20H3V5.83L1.39 4.22L2.8 2.81l18.38 18.38zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.17 9H6v6h5z"></svg:path>`,
})
export class IcSharpClosedCaptionDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
