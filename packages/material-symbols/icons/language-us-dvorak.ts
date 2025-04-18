import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsDvorakIcon],svg[material-symbols-language-us-dvorak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h3.25V9H6zm-2 2V7h5.25q.825 0 1.413.588T11.25 9v6q0 .825-.587 1.413T9.25 17zm11.625 0L12.25 7h2l2.375 6.95L19 7h2l-3.375 10z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsDvorakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
