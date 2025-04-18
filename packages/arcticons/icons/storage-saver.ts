import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStorageSaverIcon],svg[arcticons-storage-saver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.31 8.073h3.084c1.18 0 2.312.468 3.146 1.303l6.406 6.406a4.45 4.45 0 0 1 1.303 3.146v11.244a2.225 2.225 0 0 1-2.224 2.224H24.977a2.225 2.225 0 0 1-2.224-2.224V24.54"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.25 37.448v2.828a2.225 2.225 0 0 1-2.225 2.224h-26.05a2.225 2.225 0 0 1-2.224-2.224V10.297c0-1.228.996-2.224 2.224-2.224h2.781M25.31 5.5v6.221M19.533 5.5v6.221M13.756 5.5v6.221"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.103 26.077l-6.35-6.35l-6.35 6.35"></svg:path>`,
})
export class ArcticonsStorageSaverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
