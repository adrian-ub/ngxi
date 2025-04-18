import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreencastRoundedIcon],svg[material-symbols-screencast-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm13-4h-2q-.425 0-.713-.288T14 15q0-.425.288-.713T15 14h2q.425 0 .713.288T18 15q0 .425-.288.713T17 16Zm0-3h-2q-.425 0-.713-.288T14 12q0-.425.288-.713T15 11h2q.425 0 .713.288T18 12q0 .425-.288.713T17 13ZM4 11v7h16v-8h-5q-.425 0-.713-.288T14 9q0-.425.288-.713T15 8h5V6h-8v4q0 .425-.288.713T11 11H4Z"></svg:path>`,
})
export class MaterialSymbolsScreencastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
