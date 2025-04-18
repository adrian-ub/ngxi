import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsInputComponentSharpIcon],svg[material-symbols-settings-input-component-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23v-4.15l-2-2V14h6v2.85l-2 2V23zm8 0v-4.15l-2-2V14h6v2.85l-2 2V23zm8 0v-4.15l-2-2V14h6v2.85l-2 2V23zM1 12V6h2V1h2v5h2v6zm8 0V6h2V1h2v5h2v6zm8 0V6h2V1h2v5h2v6z"></svg:path>`,
})
export class MaterialSymbolsSettingsInputComponentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
