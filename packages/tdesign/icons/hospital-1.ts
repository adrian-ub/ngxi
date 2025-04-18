import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHospital1Icon],svg[tdesign-hospital-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.999 1.66l10.413 9.257l-1.329 1.495L20 11.449v10.55H4V11.455l-1.094.957l-1.317-1.505L4.338 8.5zm-6 8.038V20H9v-5h6v5h3V9.67l-6-5.33zM13 20v-3h-2v3zm0-13v2h2v2h-2v2h-2v-2H9V9h2V7z"></svg:path>`,
})
export class TdesignHospital1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
