import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRequestPageOutlineIcon],svg[material-symbols-request-page-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h2v-1h1q.425 0 .713-.288T15 16v-3q0-.425-.288-.712T14 12h-3v-1h4V9h-2V8h-2v1h-1q-.425 0-.712.288T9 10v3q0 .425.288.713T10 14h3v1H9v2h2zm-5 4q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm0-2h12V8.85L13.15 4H6zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsRequestPageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
