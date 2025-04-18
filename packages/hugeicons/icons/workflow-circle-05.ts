import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle05Icon],svg[hugeicons-workflow-circle-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6 8v8"></svg:path><svg:path d="M6 12h8c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C18 10.1 18 9.4 18 8"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
