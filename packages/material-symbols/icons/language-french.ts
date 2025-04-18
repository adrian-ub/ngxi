import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageFrenchIcon],svg[material-symbols-language-french-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V7h7v2H6v2h4v2H6v4zm9 0V7h5q.825 0 1.413.588T20 9v2q0 .8-.55 1.363t-1.3.637L20 17h-2.1l-1.875-4H15v4zm2-6h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsLanguageFrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
