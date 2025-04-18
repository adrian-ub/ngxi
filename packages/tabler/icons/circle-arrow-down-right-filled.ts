import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleArrowDownRightFilledIcon],svg[tabler-circle-arrow-down-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8l-.117.007A1 1 0 0 0 14 9v3.585L9.707 8.293l-.094-.083a1 1 0 0 0-1.32 1.497L12.585 14H9l-.117.007A1 1 0 0 0 9 16l6.034.001a1 1 0 0 0 .186-.025l.053-.014l.066-.02l.13-.059l.093-.055A.98.98 0 0 0 16 15V9l-.007-.117A1 1 0 0 0 15 8"></svg:path>`,
})
export class TablerCircleArrowDownRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
