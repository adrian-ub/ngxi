import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhoneAndroidRoundedIcon],svg[material-symbols-light-phone-android-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.616 19.654h2.769q.161 0 .273-.112t.111-.273t-.111-.273q-.112-.111-.273-.111h-2.77q-.161 0-.273.111q-.111.112-.111.273t.111.273t.273.112m-3 2.346q-.69 0-1.152-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 16.538h10V5.5H7z"></svg:path>`,
})
export class MaterialSymbolsLightPhoneAndroidRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
