import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLineChartUpIcon],svg[ci-line-chart-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H4a1 1 0 0 1-1-1V3h2v16h16v2ZM8.373 16L7 14.656L11.856 9.9a.985.985 0 0 1 1.373 0l2.227 2.181L19.627 8L21 9.344L16.144 14.1a.985.985 0 0 1-1.373 0l-2.228-2.182L8.374 16h-.001Z"></svg:path>`,
})
export class CiLineChartUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
