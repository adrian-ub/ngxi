import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabCloseRightOutlineRoundedIcon],svg[material-symbols-tab-close-right-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.4l2.15 2.15q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.15-2.15q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.85 8.45q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L10.6 12l-2.15 2.15q-.275.275-.275.7t.275.7t.7.275t.7-.275zm7.175 6.6H16q-.425 0-.712-.288T15 19t.288-.712T16 18h3.175l-.9-.9Q18 16.825 18 16.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T18.3 22.3q-.275-.275-.275-.7t.275-.7zM5 19V5zv-.025zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v7q0 .425-.288.713T20 13t-.712-.288T19 12V5H5v14h7q.425 0 .713.288T13 20t-.288.713T12 21z"></svg:path>`,
})
export class MaterialSymbolsTabCloseRightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
