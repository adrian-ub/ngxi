import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHdrOnSharpIcon],svg[material-symbols-light-hdr-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.308 14.692V9.308h3.788l.596.596v2.112l-.596.615h-.458l.9 2.061h-.923l-.9-2h-1.523v2zm.884-2.884h2.616v-1.616h-2.616zM3.308 14.692V9.308h.884v2h2.616v-2h.884v5.384h-.884v-2.5H4.192v2.5zm6.5 0V9.308h3.788l.596.596v4.173l-.596.615zm.884-.884h2.616v-3.616h-2.616z"></svg:path>`,
})
export class MaterialSymbolsLightHdrOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
