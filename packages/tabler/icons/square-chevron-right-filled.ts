import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareChevronRightFilledIcon],svg[tabler-square-chevron-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7.387 6.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L12.585 12l-2.292 2.293l-.083.094a1 1 0 0 0 1.497 1.32l3-3l.083-.094a1 1 0 0 0-.083-1.32l-3-3z"></svg:path>`,
})
export class TablerSquareChevronRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
