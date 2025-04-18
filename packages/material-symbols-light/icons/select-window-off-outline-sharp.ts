import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSelectWindowOffOutlineSharpIcon],svg[material-symbols-light-select-window-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 22.53l-9.723-9.722H4v7h12v-3.814l1 1v3.814H3v-11h4V8.42L1.887 3.308l.713-.714l19.223 19.223zm-4.072-8.309L16 13.183v-.347h-.346l-3.029-3.028H17v3.384h3v-7H9.01L7.092 4.275V3.192H21v11h-3.962z"></svg:path>`,
})
export class MaterialSymbolsLightSelectWindowOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
