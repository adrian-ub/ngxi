import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSendToMobileIcon],svg[ic-sharp-send-to-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2z"></svg:path><svg:path fill="currentColor" d="m22 12l-4-4v3h-5v2h5v3z"></svg:path>`,
})
export class IcSharpSendToMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
