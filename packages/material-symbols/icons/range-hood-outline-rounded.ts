import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRangeHoodOutlineRoundedIcon],svg[material-symbols-range-hood-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18v-4.2q0-.4.163-.763T2.6 12.4L7 8V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v3l4.425 4.425q.275.275.425.638t.15.762V18q0 .825-.587 1.413T20 20zm8-15H9v2.975q0 .4-.15.763t-.425.637L5.8 12h12.4l-2.625-2.625q-.275-.275-.425-.638T15 7.976V5zM4 18h16v-4H4zm6.75-1.3q-.325 0-.537-.213T10 15.95t.213-.537t.537-.213h2.5q.325 0 .538.213t.212.537t-.213.538t-.537.212z"></svg:path>`,
})
export class MaterialSymbolsRangeHoodOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
