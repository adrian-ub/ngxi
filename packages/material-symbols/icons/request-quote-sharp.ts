import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRequestQuoteSharpIcon],svg[material-symbols-request-quote-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19h2v-1h2v-5h-4v-1h4v-2h-2V9h-2v1H9v5h4v1H9v2h2zm-7 3V2h11l5 5v15zm2-2h12V8h-4V4H6zM6 4h8v4h4l-4-4v4h4v12H6z"></svg:path>`,
})
export class MaterialSymbolsRequestQuoteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
