import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHelpClinicOutlineIcon],svg[material-symbols-light-help-clinic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 16.692h1v-4h-1zm.5-6.153q.31 0 .54-.23t.23-.54t-.23-.54T12 9t-.54.23t-.23.54t.23.539t.54.23M5 20V9.5l7-5.27l7 5.27V20zm1-1h12v-9l-6-4.5L6 10zm6-6.75"></svg:path>`,
})
export class MaterialSymbolsLightHelpClinicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
