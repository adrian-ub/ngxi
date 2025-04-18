import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShareWindowsIcon],svg[material-symbols-share-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15V9q0-.825.588-1.412T9 7h8.15l-2.575-2.575L16 3l5 5l-5 5l-1.425-1.4L17.15 9H9v6zm-2 6q-.825 0-1.412-.587T3 19V4h2v15h12v-4h2v4q0 .825-.587 1.413T17 21z"></svg:path>`,
})
export class MaterialSymbolsShareWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
