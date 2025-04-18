import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDirectionsOffIcon],svg[ic-sharp-directions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 7.5l3.5 3.5l-1.33 1.34l3.45 3.45L22.41 12L12.01 1.58l-3.8 3.8L13 10.17zM1.39 4.22l3.99 3.99L1.59 12l10.42 10.4l3.79-3.79l3.99 3.99l1.41-1.41L2.81 2.81zm8.6 8.6V15h-2v-4.18z"></svg:path>`,
})
export class IcSharpDirectionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
