import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilesOutlineIcon],svg[material-symbols-files-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V8q0-.825.588-1.412T4 6h6l2-2h8q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.825-7H11V7.825zM4 12l4-4H4zm0 3v3h16V6h-7v7q0 .825-.587 1.413T11 15zm7-4"></svg:path>`,
})
export class MaterialSymbolsFilesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
