import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAccountLogoutIcon],svg[cil-account-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M77.155 272.034H351.75v-32.001H77.155l75.053-75.053v-.001l-22.628-22.626l-113.681 113.68l.001.001h-.001L129.58 369.715l22.628-22.627v-.001z"></svg:path><svg:path fill="currentColor" d="M160 16v32h304v416H160v32h336V16z"></svg:path>`,
})
export class CilAccountLogoutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
