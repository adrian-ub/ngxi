import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartEvaluationIcon],svg[hugeicons-chart-evaluation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3"></svg:path><svg:path d="m17.705 9.333l-2.874 4.652c-.419.677-.894 1.701-1.756 1.55c-1.014-.179-1.5-1.69-2.372-2.19c-.71-.408-1.223.083-1.638.655M21 4l-1.854 3M5 20l2.526-3.733"></svg:path></svg:g>`,
})
export class HugeiconsChartEvaluationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
