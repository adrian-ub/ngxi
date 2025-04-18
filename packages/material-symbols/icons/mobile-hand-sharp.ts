import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileHandSharpIcon],svg[material-symbols-mobile-hand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h13v4h-3v8.275l-3.4-1.7l-3.3 3.3L12.4 22zm11.95 0q-.45 0-.862-.187t-.688-.538L10 16l1-1l5 2.5V8h1l3 3v8q0 1.25-.875 2.125T17 22zM10.5 7q.425 0 .713-.288T11.5 6t-.288-.712T10.5 5t-.712.288T9.5 6t.288.713T10.5 7"></svg:path>`,
})
export class MaterialSymbolsMobileHandSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
