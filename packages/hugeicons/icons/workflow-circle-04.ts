import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle04Icon],svg[hugeicons-workflow-circle-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3-3V8"></svg:path><svg:path d="M18 8c0 .932 0 3.398-.152 3.765a2 2 0 0 1-1.083 1.083C16.398 13 15.932 13 15 13H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C6 14.602 6 15.068 6 16"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
