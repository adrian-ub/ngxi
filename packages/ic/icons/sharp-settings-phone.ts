import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSettingsPhoneIcon],svg[ic-sharp-settings-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.21 17.37a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM11 9h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class IcSharpSettingsPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
