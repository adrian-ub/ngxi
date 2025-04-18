import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMosaicOutlineIcon],svg[material-symbols-auto-awesome-mosaic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6zm-2-2V5H5v14zm4-8V3h6q.825 0 1.413.588T21 5v6zm2-2h4V5h-4zm-2 12v-8h8v6q0 .825-.587 1.413T19 21zm2-2h4v-4h-4zm0-4"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMosaicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
