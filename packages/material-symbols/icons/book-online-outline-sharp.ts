import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookOnlineOutlineSharpIcon],svg[material-symbols-book-online-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16v-3q.425 0 .713-.288T9 12t-.288-.712T8 11V8h8v3q-.425 0-.712.288T15 12t.288.713T16 13v3zm4-1.5q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15t-.35.15t-.15.35t.15.35t.35.15m0-2q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15t-.35.15t-.15.35t.15.35t.35.15m0-2q.2 0 .35-.15t.15-.35t-.15-.35T12 9.5t-.35.15t-.15.35t.15.35t.35.15M5 23V1h14v22zm2-3v1h10v-1zm0-2h10V6H7zM7 4h10V3H7zm0 0V3zm0 16v1z"></svg:path>`,
})
export class MaterialSymbolsBookOnlineOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
