import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenAddSharpIcon],svg[material-symbols-light-splitscreen-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.635V4h16v6.635zM4 20v-6.615h16v1.042q-.17-.011-.315-.017q-.146-.006-.3-.025q-2.087 0-3.544 1.465t-1.457 3.535q0 .169.006.323t.018.292zm15 2.23V20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
