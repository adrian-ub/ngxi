import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSpaceDashboardIcon],svg[ic-sharp-space-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H3V3h8zm2 0h8v-9h-8zm8-11V3h-8v7z"></svg:path>`,
})
export class IcSharpSpaceDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
