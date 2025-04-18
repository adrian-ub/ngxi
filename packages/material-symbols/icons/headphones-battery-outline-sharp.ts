import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadphonesBatteryOutlineSharpIcon],svg[material-symbols-headphones-battery-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18H2v-6q0-2.5 1.75-4.25T8 6t4.25 1.75T14 12v6h-4v-5h2.5v-1q0-1.875-1.312-3.187T8 7.5T4.813 8.813T3.5 12v1H6zm10 0V7h2V6h2v1h2v11zm2-2h2zm0 0h2V9h-2z"></svg:path>`,
})
export class MaterialSymbolsHeadphonesBatteryOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
