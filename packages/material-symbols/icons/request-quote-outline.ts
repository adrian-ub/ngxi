import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRequestQuoteOutlineIcon],svg[material-symbols-request-quote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19h2v-1h1q.425 0 .713-.288T15 17v-3q0-.425-.288-.712T14 13h-3v-1h4v-2h-2V9h-2v1h-1q-.425 0-.712.288T9 11v3q0 .425.288.713T10 15h3v1H9v2h2zm-5 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-14V4H6v16h12V8zM6 4v4zv16z"></svg:path>`,
})
export class MaterialSymbolsRequestQuoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
