import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileTypeIcon],svg[lucide-file-type-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M9 13v-1h6v1m-3-1v6m-1 0h2"></svg:path></svg:g>`,
})
export class LucideFileTypeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
