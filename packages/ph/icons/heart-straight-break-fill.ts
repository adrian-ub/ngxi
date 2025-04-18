import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakFillIcon],svg[ph-heart-straight-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M113.29 55.31A58 58 0 0 0 32.93 139l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0-82-82.1l-24.4 23l26.4 26.42a8 8 0 0 1 0 11.32l-20.69 20.69A8 8 0 1 1 111 127l15-15l-26.5-26.58a8 8 0 0 1 .22-11.53l13.55-12.78a4 4 0 0 0 0-5.8Z"></svg:path>`,
})
export class PhHeartStraightBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
