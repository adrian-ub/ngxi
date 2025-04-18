import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHideImageOutlineRoundedIcon],svg[material-symbols-hide-image-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v11q0 .5-.312.75T20 17t-.687-.262t-.313-.763V5H8q-.5 0-.75-.312T7 4t.25-.687T8 3h11q.825 0 1.413.588T21 5M5 21q-.825 0-1.412-.587T3 19V5.8l-.9-.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-.9-.9zm9.175-4H7q-.3 0-.45-.275t.05-.525l2-2.675q.15-.2.4-.2t.4.2L11.25 16l.825-1.1L5 7.825V19h11.175zM10.6 13.4"></svg:path>`,
})
export class MaterialSymbolsHideImageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
