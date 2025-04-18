import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDockIcon],svg[material-symbols-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23v-2h8v2zm0-4q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h8q.825 0 1.413.588T18 3v14q0 .825-.587 1.413T16 19zm0-5h8V6H8z"></svg:path>`,
})
export class MaterialSymbolsDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
