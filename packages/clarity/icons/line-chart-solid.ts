import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityLineChartSolidIcon],svg[clarity-line-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-9.44 20.94l-7.1-10.58l-6.34 9.28l-4.5-4L6 19.05l2.7 2.39l6.76-9.88l7.19 10.71l7-9.27l1.7 1.28Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityLineChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
