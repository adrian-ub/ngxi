import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSettingsSystemDaydreamIcon],svg[ic-sharp-settings-system-daydream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6.5a2.5 2.5 0 0 0 0-5h-.05c-.24-1.69-1.69-3-3.45-3c-1.4 0-2.6.83-3.16 2.02h-.16A2.994 2.994 0 0 0 6 13c0 1.66 1.34 3 3 3M23 3H1v18h22zm-2 16.01H3V4.99h18z"></svg:path>`,
})
export class IcSharpSettingsSystemDaydreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
