import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureAsPdfOutlineIcon],svg[material-symbols-picture-as-pdf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12.5h1v-2h1q.425 0 .713-.288T12 9.5v-1q0-.425-.288-.712T11 7.5H9zm1-3v-1h1v1zm3 3h2q.425 0 .713-.288T16 11.5v-3q0-.425-.288-.712T15 7.5h-2zm1-1v-3h1v3zm3 1h1v-2h1v-1h-1v-1h1v-1h-2zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsPictureAsPdfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
