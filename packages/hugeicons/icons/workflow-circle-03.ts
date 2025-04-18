import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle03Icon],svg[hugeicons-workflow-circle-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 3v1m0 0c0 .932 0 1.398.178 1.765c.236.49.69.88 1.262 1.083c.43.152.973.152 2.06.152s1.63 0 2.06.152c.571.203 1.026.593 1.262 1.083c.178.367.178.833.178 1.765v1m-7-7c0 .932 0 1.398-.178 1.765c-.236.49-.69.88-1.262 1.083C10.13 12 9.587 12 8.5 12s-1.63 0-2.06.152c-.571.203-1.026.593-1.262 1.083C5 13.602 5 14.068 5 15v1"></svg:path><svg:path d="M8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
