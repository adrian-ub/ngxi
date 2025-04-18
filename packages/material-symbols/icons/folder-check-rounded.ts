import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheckRoundedIcon],svg[material-symbols-folder-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.85 13.75l-1.425-1.425q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.1 2.125q.3.3.713.3t.712-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsFolderCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
