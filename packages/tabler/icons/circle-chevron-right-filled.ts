import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronRightFilledIcon],svg[tabler-circle-chevron-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0C2 6.477 6.477 2 12 2m-.293 6.293a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32L12.585 12l-2.292 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class TablerCircleChevronRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
