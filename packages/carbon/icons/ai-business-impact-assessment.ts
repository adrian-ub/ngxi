import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAiBusinessImpactAssessmentIcon],svg[carbon-ai-business-impact-assessment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 23h2v8h-2zm4-2h2v10h-2zm-8 6h2v4h-2zm-2-7v-2h1v-7h-1V9h4v2h-1v7h1v2zm-3.5 0h2L13 9h-3L6.503 20h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L13.264 16z"></svg:path><svg:path fill="currentColor" d="M17 30H0V0h30v17h-2V2H2v26h15z"></svg:path>`,
})
export class CarbonAiBusinessImpactAssessmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
