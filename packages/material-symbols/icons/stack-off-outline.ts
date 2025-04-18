import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffOutlineIcon],svg[material-symbols-stack-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.15l-2-2V10h-7.15l-2-2H20q.825 0 1.413.588T22 10zM14 6V4H6.85l-2-2H14q.825 0 1.413.588T16 4v2zm-4 14h7.15L10 12.85zm10.575 3.425L19.15 22H10q-.85 0-1.425-.575T8 20v-9.15l-4-4V14h2v2H4q-.85 0-1.425-.575T2 14V4.85L.575 3.425L2 2l20 20zm-7-7"></svg:path>`,
})
export class MaterialSymbolsStackOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
