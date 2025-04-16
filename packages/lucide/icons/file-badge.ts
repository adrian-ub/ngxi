import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileBadgeIcon],svg[lucide-file-badge-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M5 17a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M7 16.5L8 22l-3-1l-3 1l1-5.5"></svg:path></svg:g>`,
})
export class LucideFileBadgeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
