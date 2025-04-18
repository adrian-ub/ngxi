import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsColemakIcon],svg[material-symbols-language-us-colemak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15H18V9h-3.5zM6 17q-.825 0-1.412-.587T4 15V9q0-.825.588-1.412T6 7h4.5v2H6v6h4.5v2zm8.5 0q-.825 0-1.412-.587T12.5 15V9q0-.825.588-1.412T14.5 7H18q.825 0 1.413.588T20 9v6q0 .825-.587 1.413T18 17z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsColemakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
