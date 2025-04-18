import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageGbEnglishIcon],svg[material-symbols-language-gb-english-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h4v-2h-4zm0-4h4V9h-4zM5 17q-.825 0-1.412-.587T3 15V9q0-.825.588-1.412T5 7h4q.825 0 1.413.588T11 9H5v6h4v-2H7v-2h4v4q0 .825-.587 1.413T9 17zm8 0V7h6q.825 0 1.413.588T21 9v1.5q0 .625-.437 1.063T19.5 12q.625 0 1.063.438T21 13.5V15q0 .825-.587 1.413T19 17z"></svg:path>`,
})
export class MaterialSymbolsLanguageGbEnglishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
