import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMagnifyFullscreenSharpIcon],svg[material-symbols-light-magnify-fullscreen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm11.5-5.308h1V11.5h2.192v-1H15.5V8.308h-1V10.5h-2.192v1H14.5z"></svg:path>`,
})
export class MaterialSymbolsLightMagnifyFullscreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
