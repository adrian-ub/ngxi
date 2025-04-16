import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileKey2Icon],svg[lucide-file-key-2-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:circle cx="4" cy="16" r="2"></svg:circle><svg:path d="m10 10l-4.5 4.5M9 11l1 1"></svg:path></svg:g>`,
})
export class LucideFileKey2Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
