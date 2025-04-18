import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhotoSizeSelectSmallIcon],svg[material-symbols-photo-size-select-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H5q-.825 0-1.412-.587T3 19v-8h10zm-9-2h8l-2.6-3.5L7.5 18l-1.4-1.85zM5 5H3q0-.825.588-1.412T5 3zm2 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm0 16v-2h2v2zm4-16V3q.825 0 1.413.588T21 5zM3 9V7h2v2zm16 10h2q0 .825-.587 1.413T19 21zm0-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsPhotoSizeSelectSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
