import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGMobiledataBadgeOutlineIcon],svg[material-symbols-g-mobiledata-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm5 12h4q.825 0 1.413-.587T16 15v-4h-4v2h2v2h-4V9h6q0-.825-.587-1.412T14 7h-4q-.825 0-1.412.588T8 9v6q0 .825.588 1.413T10 17"></svg:path>`,
})
export class MaterialSymbolsGMobiledataBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
