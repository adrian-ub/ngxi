import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPermDeviceInformationIcon],svg[ic-sharp-perm-device-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v2h2zm0 4h-2v6h2zM5 1v22h14V1zm12 18H7V5h10z"></svg:path>`,
})
export class IcSharpPermDeviceInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
