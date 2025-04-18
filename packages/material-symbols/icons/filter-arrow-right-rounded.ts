import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterArrowRightRoundedIcon],svg[material-symbols-filter-arrow-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.175 16H16q-.425 0-.712-.288T15 15t.288-.712T16 14h3.175l-.9-.9Q18 12.825 18 12.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.6 2.6q-.275.275-.687.288T18.3 18.3q-.275-.275-.275-.7t.275-.7zM11 12.3L15.95 6h-9.9zM9 13L3.225 5.625q-.125-.15-.175-.312T3 5q0-.4.288-.7T4 4h14q.425 0 .713.3T19 5q0 .15-.05.313t-.175.312L13 13v6q0 .425-.288.713T12 20h-2q-.425 0-.712-.288T9 19z"></svg:path>`,
})
export class MaterialSymbolsFilterArrowRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
