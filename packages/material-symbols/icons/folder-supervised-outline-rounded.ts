import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSupervisedOutlineRoundedIcon],svg[material-symbols-folder-supervised-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20q-.425 0-.712-.288T14 19q0-.775 1.1-1.388T18 17t2.9.613T22 19q0 .425-.288.713T21 20zm3-4q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16M4 18V6v4.3v-.3zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v2q0 .425-.288.713T21 11t-.712-.288T20 10V8h-8.825l-2-2H4v12h7q.425 0 .713.288T12 19t-.288.713T11 20z"></svg:path>`,
})
export class MaterialSymbolsFolderSupervisedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
