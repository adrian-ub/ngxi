import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight6mpSharpIcon],svg[material-symbols-light-6mp-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.116 11.192H14V8.116h-3V6.692h3v-.884h-3.884zm.884-.769V8.885h2.116v1.538zm-4.692 7.77h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.385H6.308zm7.5 0h.884v-1.5h3v-3.885h-3.884zm.884-2.385v-2.116h2.116v2.116zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLight6mpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
