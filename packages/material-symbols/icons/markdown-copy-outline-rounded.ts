import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarkdownCopyOutlineRoundedIcon],svg[material-symbols-markdown-copy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22zm6.75-13.5h1v2.25q0 .325.213.538t.537.212t.538-.213t.212-.537V8.5h1v3.75q0 .325.213.538T16 13t.538-.213t.212-.537V8q0-.425-.288-.712T15.75 7h-4.5q-.425 0-.712.288T10.25 8v4.25q0 .325.213.538T11 13t.538-.213t.212-.537zM9 16V4z"></svg:path>`,
})
export class MaterialSymbolsMarkdownCopyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
