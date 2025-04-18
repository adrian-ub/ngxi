import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSendToMobileRoundedIcon],svg[material-symbols-send-to-mobile-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.15 13H13q-.425 0-.712-.288T12 12t.288-.712T13 11h4.15l-.875-.9Q16 9.825 16 9.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T16.3 15.3q-.275-.275-.288-.687t.263-.713zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3q0 .425-.288.713T18 7t-.712-.288T17 6H7v12h10q0-.425.288-.712T18 17t.713.288T19 18v3q0 .825-.587 1.413T17 23z"></svg:path>`,
})
export class MaterialSymbolsSendToMobileRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
