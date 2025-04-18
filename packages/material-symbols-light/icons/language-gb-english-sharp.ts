import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageGbEnglishSharpIcon],svg[material-symbols-light-language-gb-english-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15.5h4.23l.674-.673v-1.654l-.673-.673H14zm0-4h4.23l.674-.673V9.173L18.23 8.5H14zm-9.904 5v-9h6.77v1h-5.77v7H10v-3H7.808v-1H11v5zm8.904 0v-9h5.692l1.212 1.212v2.346l-.904.904l.904.904v2.423L18.692 16.5z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageGbEnglishSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
