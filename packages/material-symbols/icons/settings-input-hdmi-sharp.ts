import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsInputHdmiSharpIcon],svg[material-symbols-settings-input-hdmi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22v-3l-3-6V7h1V2h12v5h1v6l-3 6v3zM8 7h2V5h1v2h2V5h1v2h2V4H8z"></svg:path>`,
})
export class MaterialSymbolsSettingsInputHdmiSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
