import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBrokenImageIcon],svg[ic-sharp-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v8.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V3zm-3 8.42l3 3.01V21H3v-8.58l3 2.99l4-4l4 4z"></svg:path>`,
})
export class IcSharpBrokenImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
