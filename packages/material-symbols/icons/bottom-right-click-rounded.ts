import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBottomRightClickRoundedIcon],svg[material-symbols-bottom-right-click-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h15V4q0-.425.288-.712T20 3t.713.288T21 4v15q0 .825-.587 1.413T19 21zm11-4q-.825 0-1.412-.587T13 15t.588-1.412T15 13t1.413.588T17 15t-.587 1.413T15 17m-9-5q-.425 0-.712-.288T5 11t.288-.712T6 10h2.6L3.7 5.125q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3L10 8.6V6q0-.425.288-.712T11 5t.713.288T12 6v5q0 .425-.288.713T11 12z"></svg:path>`,
})
export class MaterialSymbolsBottomRightClickRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
