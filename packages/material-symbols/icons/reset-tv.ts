import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsResetTvIcon],svg[material-symbols-reset-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v5h-9.2l1.85-1.85l-1.4-1.4L9 11l4.25 4.25l1.4-1.4L12.8 12H22v5q0 .825-.587 1.413T20 19h-4v2z"></svg:path>`,
})
export class MaterialSymbolsResetTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
