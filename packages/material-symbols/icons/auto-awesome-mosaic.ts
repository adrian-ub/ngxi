import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMosaicIcon],svg[material-symbols-auto-awesome-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6zm2-10V3h6q.825 0 1.413.588T21 5v6zm0 10v-8h8v6q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMosaicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
