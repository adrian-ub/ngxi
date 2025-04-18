import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHourglassEmptyIcon],svg[ic-sharp-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v6h.01L6 8.01L10 12l-4 4l.01.01H6V22h12v-5.99h-.01L18 16l-4-4l4-3.99l-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5l-4-4V4h8v3.5z"></svg:path>`,
})
export class IcSharpHourglassEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
