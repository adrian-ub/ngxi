import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasLicenseSmIcon],svg[pajamas-license-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 6.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 4a4 4 0 0 1-1.842 3.369l.517 2.843L9 12l-1.66-.741L6 10.66l-1.34.599L3 12l.325-1.788l.517-2.843A4 4 0 1 1 10 4M5.252 8h1.496l.268 1.47l-.404-.18L6 9.017l-.612.273l-.404.18zM6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasLicenseSmIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
