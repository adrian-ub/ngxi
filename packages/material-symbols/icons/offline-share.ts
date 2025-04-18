import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOfflineShareIcon],svg[material-symbols-offline-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23q-.825 0-1.412-.587T4 21V5h2v16h10v2zm4-4q-.825 0-1.412-.587T8 17V3q0-.825.588-1.412T10 1h8q.825 0 1.413.588T20 3v14q0 .825-.587 1.413T18 19zm0-5h8V6h-8zm1-2V9.75q0-.425.288-.712T12 8.75h2.15l-.7-.7L14.5 7L17 9.5L14.5 12l-1.05-1.05l.7-.7H12.5V12z"></svg:path>`,
})
export class MaterialSymbolsOfflineShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
