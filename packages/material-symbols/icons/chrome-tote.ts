import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChromeToteIcon],svg[material-symbols-chrome-tote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.525 13.5l4-4l-1.4-1.425l-1.6 1.575V5.5h-2v4.15l-1.6-1.575l-1.4 1.425l4 4Zm-5.5 3.5q-.825 0-1.413-.588T7.026 15V4q0-.825.588-1.413T9.024 2h11q.825 0 1.413.588T22.024 4v11q0 .825-.587 1.413T20.025 17h-11Zm-3.3 4.875q-.825.125-1.475-.4t-.75-1.35L2.15 9.2q-.1-.825.413-1.475t1.337-.75l1.125-.125V16q0 1.25.875 2.125T8.025 19h10.45q0 .65-.537 1.025t-1.213.475l-11 1.375Z"></svg:path>`,
})
export class MaterialSymbolsChromeToteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
