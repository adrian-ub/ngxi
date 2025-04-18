import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDockRoundedIcon],svg[material-symbols-dock-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q0-.425.288-.712T9 21h6q.425 0 .713.288T16 22t-.288.713T15 23H9q-.425 0-.712-.288T8 22m0-3q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h8q.825 0 1.413.588T18 3v14q0 .825-.587 1.413T16 19zm0-5h8V6H8z"></svg:path>`,
})
export class MaterialSymbolsDockRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
