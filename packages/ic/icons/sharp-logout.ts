import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLogoutIcon],svg[ic-sharp-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h7V3H3v18h9v-2H5z"></svg:path><svg:path fill="currentColor" d="m21 12l-4-4v3H9v2h8v3z"></svg:path>`,
})
export class IcSharpLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
