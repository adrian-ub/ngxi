import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstallerxIcon],svg[arcticons-installerx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.435 38.784H23.64l-6.974-7.581zm19.361-.551L5.5 15.043h19.055l10.43 11.57zm.395-24.574l9.468 10.614V9.216h-6.446zm12.003-2.935v4.154H42.5z"></svg:path>`,
})
export class ArcticonsInstallerxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
