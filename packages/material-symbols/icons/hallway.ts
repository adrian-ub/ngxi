import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHallwayIcon],svg[material-symbols-hallway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h3l4-4l4 4h3q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm1-4h12l-3.75-5l-3 4L9 14zm4.1-14h3.8L12 2.1z"></svg:path>`,
})
export class MaterialSymbolsHallwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
