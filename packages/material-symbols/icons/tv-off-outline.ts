import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvOffOutlineIcon],svg[material-symbols-tv-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.325 18.475L20 17.15V5H7.85l-2-2H20q.825 0 1.413.588T22 5v12q0 .45-.162.813t-.513.662m-18.15-15.3L5 5H4v12h10.15L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-4.3-4.3H16v2H8v-2H4q-.825 0-1.412-.587T2 17V5q0-.925.588-1.375zm10.8 7.95"></svg:path>`,
})
export class MaterialSymbolsTvOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
