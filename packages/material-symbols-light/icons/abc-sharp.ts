import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAbcSharpIcon],svg[material-symbols-light-abc-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.27 14.692V9.308h4.384V11h-.885v-.808h-2.615v3.616h2.615V13h.885v1.692zm-6.462 0V9.308h3.942l.442.442v1.808L13.75 12l.442.442v1.808l-.442.442zm.884-3.134h2.616v-1.366h-2.616zm0 2.25h2.616v-1.366h-2.616zm-7.346.884V9.308h4.385v5.384h-.885V13H4.231v1.692zm.885-2.576h2.615v-1.924H4.231z"></svg:path>`,
})
export class MaterialSymbolsLightAbcSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
