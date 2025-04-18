import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCodeAnalysisIcon],svg[streamline-code-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.625 12.5a5.875 5.875 0 1 0 0-11.75a5.875 5.875 0 0 0 0 11.75m6.625.75l-2.467-2.467"></svg:path><svg:path d="m5.5 4.5l-2 2l2 2m2-4l2 2l-2 2"></svg:path></svg:g>`,
})
export class StreamlineCodeAnalysisIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
