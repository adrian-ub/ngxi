import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSettingsCellIcon],svg[ic-outline-settings-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 18H8v-1h8zm0-3H8V5h8zm0-12H8V2h8z"></svg:path>`,
})
export class IcOutlineSettingsCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
