import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMemoryAltSharpIcon],svg[material-symbols-light-memory-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 14.5h1v-5h-1zm5 0h1v-5h-1zm5 0h1v-5h-1zM5.5 20v-2H3V6h2.5V4h1v2h5V4h1v2h5V4h1v2H21v12h-2.5v2h-1v-2h-5v2h-1v-2h-5v2z"></svg:path>`,
})
export class MaterialSymbolsLightMemoryAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
