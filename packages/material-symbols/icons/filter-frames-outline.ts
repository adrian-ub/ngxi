import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterFramesOutlineIcon],svg[material-symbols-filter-frames-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4l4-4l4 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-2V8h12v10zm2-2h8v-6H8zm4-3"></svg:path>`,
})
export class MaterialSymbolsFilterFramesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
