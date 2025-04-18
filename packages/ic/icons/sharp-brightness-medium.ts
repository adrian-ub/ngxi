import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBrightnessMediumIcon],svg[ic-sharp-brightness-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.31L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcSharpBrightnessMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
