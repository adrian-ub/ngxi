import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSirenRoundedIcon],svg[material-symbols-siren-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10q0-.825.588-1.412T12 8q.425 0 .713-.288T13 7t-.288-.712T12 6q-1.65 0-2.825 1.175T8 10v2q0 .425.288.713T9 13t.713-.288T10 12zM4 21q-.825 0-1.412-.587T2 19v-2q0-.825.588-1.412T4 15h1v-5q0-2.925 2.038-4.962T12 3t4.963 2.038T19 10v5h1q.825 0 1.413.588T22 17v2q0 .825-.587 1.413T20 21z"></svg:path>`,
})
export class MaterialSymbolsSirenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
