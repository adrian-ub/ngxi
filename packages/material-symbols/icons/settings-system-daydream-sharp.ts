import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsSystemDaydreamSharpIcon],svg[material-symbols-settings-system-daydream-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6.5q1.05 0 1.775-.725T18 13.5t-.725-1.775T15.5 11h-.05q-.2-1.275-1.113-2.137T12.15 8q-1.05 0-1.95.525T8.85 10h-.125q-1.175 0-1.95.9T6 13q0 1.25.875 2.125T9 16m-7 4V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsSettingsSystemDaydreamSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
