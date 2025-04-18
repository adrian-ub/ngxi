import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultiAppUninstallerIcon],svg[arcticons-multi-app-uninstaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.6 14.764h21.883V41.12a2.38 2.38 0 0 1-2.38 2.38H14.98a2.38 2.38 0 0 1-2.38-2.38z"></svg:path><svg:rect width="27.574" height="6.753" x="10.213" y="8.011" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.326 8.011V4.5h7.348v3.511M17.59 35.083l11.903-11.902m-11.903 0l11.903 11.902"></svg:path>`,
})
export class ArcticonsMultiAppUninstallerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
