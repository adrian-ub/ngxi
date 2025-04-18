import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOfflineShareOutlineSharpIcon],svg[material-symbols-offline-share-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 23V5h2v16h10v2zm4-4V1h12v18zm2-3v1h8v-1zm0-2h8V6h-8zm1-2V8.75h3.15l-.7-.7L14.5 7L17 9.5L14.5 12l-1.05-1.05l.7-.7H12.5V12zm-1-8h8V3h-8zm0 0V3zm0 12v1z"></svg:path>`,
})
export class MaterialSymbolsOfflineShareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
