import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddToHomeScreenRoundedIcon],svg[material-symbols-add-to-home-screen-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 11.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L8.6 10H6q-.425 0-.712-.288T5 9t.288-.712T6 8h5q.425 0 .713.288T12 9v5q0 .425-.288.713T11 15t-.712-.288T10 14zM8 23q-.825 0-1.412-.587T6 21v-3q0-.425.288-.712T7 17t.713.288T8 18h10V6H8q0 .425-.288.713T7 7t-.712-.288T6 6V3q0-.825.588-1.412T8 1h10q.825 0 1.413.588T20 3v18q0 .825-.587 1.413T18 23z"></svg:path>`,
})
export class MaterialSymbolsAddToHomeScreenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
