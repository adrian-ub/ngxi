import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCurveChartOutlineAlertedIcon],svg[clarity-curve-chart-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M7 11.8a.8.8 0 1 1 0-1.6h6c2.404 0 3.368 1.707 4.653 6.278l.182.651l.184.651c1.313 4.595 2.53 6.42 4.981 6.42h6a.8.8 0 1 1 0 1.6h-6c-3.465 0-5.019-2.331-6.519-7.58l-.186-.66l-.182-.649C15.043 13.105 14.305 11.8 13 11.8z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="m26.854 1.144l-5.72 9.86a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCurveChartOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
