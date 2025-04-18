import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsInputComponentOutlineSharpIcon],svg[material-symbols-settings-input-component-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23v-4.15l-2-2V6h2V1h2v5h2v10.85l-2 2V23zm8 0v-4.15l-2-2V6h2V1h2v5h2v10.85l-2 2V23zm8 0v-4.15l-2-2V6h2V1h2v5h2v10.85l-2 2V23zM3 8v4h2V8zm8 0v4h2V8zm8 0v4h2V8zM4 17l1-1v-2H3v2zm8 0l1-1v-2h-2v2zm8 0l1-1v-2h-2v2zm0-4"></svg:path>`,
})
export class MaterialSymbolsSettingsInputComponentOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
