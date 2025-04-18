import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBatchJobStepIcon],svg[carbon-batch-job-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 20v4h-4v4h-4v2h6v-4h4v-4h4v-2zM8 4h8v6c0 1.103.897 2 2 2h6v4h2v-6a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 18 2H8c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h4v-2H8zm15.586 6H18V4.414z"></svg:path>`,
})
export class CarbonBatchJobStepIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
