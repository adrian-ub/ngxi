import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWallLampSharpIcon],svg[material-symbols-light-wall-lamp-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 20v-5h1v5zm2.77-2v-1h6v-4H6.996L9.4 5h7.2l2.404 8H13.5v5z"></svg:path>`,
})
export class MaterialSymbolsLightWallLampSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
