import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTabletAndroidIcon],svg[ic-sharp-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z"></svg:path>`,
})
export class IcSharpTabletAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
