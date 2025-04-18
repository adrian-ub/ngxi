import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSipSharpIcon],svg[material-symbols-light-sip-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.692h1V9.308h-1zm2.808 0h.884v-2h3.5V9.308h-4.384zm-9 0h4.384v-3.134h-3.5v-1.366h3.5v-.884H5.308v3.134h3.5v1.366h-3.5zm9.884-2.884v-1.616h2.616v1.616zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightSipSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
