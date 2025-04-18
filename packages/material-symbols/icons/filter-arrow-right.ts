import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterArrowRightIcon],svg[material-symbols-filter-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13L3.225 5.625q-.125-.15-.175-.312T3 5q0-.4.288-.7T4 4h14q.425 0 .713.3T19 5q0 .15-.05.313t-.175.312L13 13v6q0 .425-.288.713T12 20h-2q-.425 0-.712-.288T9 19zm10 6l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 12.4L19 11l4 4zm-8-6.7L15.95 6h-9.9z"></svg:path>`,
})
export class MaterialSymbolsFilterArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
