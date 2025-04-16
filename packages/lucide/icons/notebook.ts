import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideNotebookIcon],svg[lucide-notebook-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"></svg:path><svg:rect width="16" height="20" x="4" y="2" rx="2"></svg:rect><svg:path d="M16 2v20"></svg:path></svg:g>`,
})
export class LucideNotebookIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
