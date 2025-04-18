import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDrive2OutlineIcon],svg[material-symbols-hard-drive-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19q.425 0 .713-.288T15 18t-.288-.712T14 17t-.712.288T13 18t.288.713T14 19m3 0q.425 0 .713-.288T18 18t-.288-.712T17 17t-.712.288T16 18t.288.713T17 19M3 13V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v9h-2V4H5v9zm2 2v5h14v-5zm0 7q-.825 0-1.412-.587T3 20v-7h18v7q0 .825-.587 1.413T19 22zm0-9h14zm0 2h14z"></svg:path>`,
})
export class MaterialSymbolsHardDrive2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
