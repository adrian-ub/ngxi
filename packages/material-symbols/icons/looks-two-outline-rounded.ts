import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooksTwoOutlineRoundedIcon],svg[material-symbols-looks-two-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15v-2h2q.825 0 1.413-.587T15 11V9q0-.825-.587-1.412T13 7h-3q-.425 0-.712.288T9 8t.288.713T10 9h3v2h-2q-.825 0-1.412.588T9 13v3q0 .425.288.713T10 17h4q.425 0 .713-.288T15 16t-.288-.712T14 15zm-6 6q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLooksTwoOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
