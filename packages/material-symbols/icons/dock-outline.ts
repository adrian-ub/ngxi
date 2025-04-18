import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDockOutlineIcon],svg[material-symbols-dock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23v-2h8v2zm0-4q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h8q.825 0 1.413.588T18 3v14q0 .825-.587 1.413T16 19zm0-3v1h8v-1zm0-2h8V6H8zM8 4h8V3H8zm0 0V3zm0 12v1z"></svg:path>`,
})
export class MaterialSymbolsDockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
