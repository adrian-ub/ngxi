import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBoldIcon],svg[solar-expressionless-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.75-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarExpressionlessCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
