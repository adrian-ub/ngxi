import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNiagaraLauncherRecentlyInstalledIcon],svg[arcticons-niagara-launcher-recently-installed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.23 31.77A10.95 10.95 0 0 0 24 34.988c6.069 0 10.988-4.92 10.988-10.988S30.068 13.012 24 13.012S13.012 17.932 13.012 24v2.139"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.063 24.19l1.949 1.949l1.948-1.949M24 24v-7.546m3.457 11.003L24 24"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNiagaraLauncherRecentlyInstalledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
