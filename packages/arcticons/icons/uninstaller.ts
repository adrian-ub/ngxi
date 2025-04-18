import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUninstallerIcon],svg[arcticons-uninstaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.37 21.48v18.377m-7.33-18.376v18.377M16.71 21.48v18.377m14.208-27.969V7.91c.001-2.812.08-3.41-2.732-3.41h-8.373c-2.812 0-2.732.598-2.732 3.41v3.98m20.295 5.844H7.354v-5.728h33.293v5.728zv23.25c0 1.394-.75 2.517-1.68 2.517H12.423c-.93 0-1.678-1.123-1.678-2.518v-23.25"></svg:path>`,
})
export class ArcticonsUninstallerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
