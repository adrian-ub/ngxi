import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlaceItemRoundedIcon],svg[material-symbols-place-item-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-.825.588-1.412T5 7h3q.425 0 .713.288T9 8t-.288.713T8 9H5v10h14V9h-3q-.425 0-.712-.288T15 8t.288-.712T16 7h3q.825 0 1.413.588T21 9v10q0 .825-.587 1.413T19 21zm8-8.825l.9-.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.287-.687T8.7 11.3q.275-.275.7-.275t.7.275l.9.875V1q0-.425.288-.712T12 0t.713.288T13 1z"></svg:path>`,
})
export class MaterialSymbolsPlaceItemRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
