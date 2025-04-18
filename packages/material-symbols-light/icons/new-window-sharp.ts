import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewWindowSharpIcon],svg[material-symbols-light-new-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h6.616v1H5v14h14v-5.615h1V20zm12-9V8h-3V7h3V4h1v3h3v1h-3v3z"></svg:path>`,
})
export class MaterialSymbolsLightNewWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
