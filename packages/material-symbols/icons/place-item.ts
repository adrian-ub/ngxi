import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlaceItemIcon],svg[material-symbols-place-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-.825.588-1.412T5 7h4v2H5v10h14V9h-4V7h4q.825 0 1.413.588T21 9v10q0 .825-.587 1.413T19 21zm7-5l-4-4l1.4-1.4l1.6 1.575V0h2v12.175l1.6-1.575L16 12z"></svg:path>`,
})
export class MaterialSymbolsPlaceItemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
