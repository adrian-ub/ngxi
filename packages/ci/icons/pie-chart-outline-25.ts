import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPieChartOutline25Icon],svg[ci-pie-chart-outline-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM11 4.062a8 8 0 1 0 8.915 9.1V13H11V4.062Zm2 0V11h6.938A8 8 0 0 0 13 4.062Z"></svg:path>`,
})
export class CiPieChartOutline25Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
