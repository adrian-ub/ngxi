import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNearbyErrorIcon],svg[ic-sharp-nearby-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.58L16.42 12L12 16.42L7.58 12zm0 11.62L4.8 12L12 4.8l6 6V7.17l-5.99-5.99L1.18 12.01l10.83 10.83L18 16.83V13.2zm8 .8h2v2h-2zm2-10h-2v8h2z"></svg:path>`,
})
export class IcSharpNearbyErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
