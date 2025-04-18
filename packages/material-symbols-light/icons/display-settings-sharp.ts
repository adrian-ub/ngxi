import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDisplaySettingsSharpIcon],svg[material-symbols-light-display-settings-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14.192h.885v-3H8v1.058H6.5v.885H8zm1.885-1.057H17.5v-.885H9.885zm5.23-2.327H16V9.75h1.5v-.885H16V7.809h-.885zM6.5 9.75h7.616v-.885H6.5zM9 20v-2H3V4h18v14h-6v2z"></svg:path>`,
})
export class MaterialSymbolsLightDisplaySettingsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
