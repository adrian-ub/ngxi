import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle01Icon],svg[hugeicons-workflow-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M9 9h5c1.886 0 2.828 0 3.414.586S18 11.114 18 13v2M6 12v10M6 6V2"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
