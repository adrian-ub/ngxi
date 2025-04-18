import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle02Icon],svg[hugeicons-workflow-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-13 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0l7.5 5l-7 5l7.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
