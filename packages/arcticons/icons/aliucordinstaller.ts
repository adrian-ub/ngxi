import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAliucordinstallerIcon],svg[arcticons-aliucordinstaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.426 18.003v.053a4.24 4.24 0 0 1-4.238 4.238h0a4.24 4.24 0 0 1-4.238-4.238v-4.318A4.24 4.24 0 0 1 29.188 9.5h0a4.24 4.24 0 0 1 4.238 4.238v.052m-18.852 8.466L18.82 9.5m4.07 12.794L18.82 9.5m2.709 8.514h-5.543m2.444 15.208l5.278 5.278l5.278-5.278M23.708 38.5V25.706"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsAliucordinstallerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
