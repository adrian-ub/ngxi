import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAodRoundedIcon],svg[material-symbols-aod-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 14.5q-.325 0-.537-.213T9 13.75t.213-.537T9.75 13h4.5q.325 0 .538.213t.212.537t-.213.538t-.537.212zm-1-3q-.325 0-.537-.213T8 10.75t.213-.537T8.75 10h6.5q.325 0 .538.213t.212.537t-.213.538t-.537.212zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"></svg:path>`,
})
export class MaterialSymbolsAodRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
