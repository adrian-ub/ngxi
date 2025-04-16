import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWorkflowIcon],svg[lucide-workflow-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="8" height="8" x="3" y="3" rx="2"></svg:rect><svg:path d="M7 11v4a2 2 0 0 0 2 2h4"></svg:path><svg:rect width="8" height="8" x="13" y="13" rx="2"></svg:rect></svg:g>`,
})
export class LucideWorkflowIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
