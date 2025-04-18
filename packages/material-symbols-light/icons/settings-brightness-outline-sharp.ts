import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsBrightnessOutlineSharpIcon],svg[material-symbols-light-settings-brightness-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.077L13.077 15H15v-1.923L16.077 12L15 10.923V9h-1.923L12 7.923L10.923 9H9v1.923L7.923 12L9 13.077V15h1.923zm0-1.577v-5q1.039 0 1.77.729t.73 1.769t-.73 1.771q-.728.731-1.77.731M3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightSettingsBrightnessOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
