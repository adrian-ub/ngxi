import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBoxPlotSolidAlertedIcon],svg[clarity-box-plot-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-2.93 5H19v.048l-1.375 2.347c-.818 1.188-.054 2.802 1.375 2.95V24h10v-8.643h5ZM7 26h10V12H7Zm2-7h6v5H9Zm6-2H9v-3h6Zm12 0h-6v-1.643h6Zm0 5h-6v-3h6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="m26.854 1.144l-5.72 9.86a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBoxPlotSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
