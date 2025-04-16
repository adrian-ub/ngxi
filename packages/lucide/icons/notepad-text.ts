import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideNotepadTextIcon],svg[lucide-notepad-text-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 2v4m4-4v4m4-4v4"></svg:path><svg:rect width="16" height="18" x="4" y="4" rx="2"></svg:rect><svg:path d="M8 10h6m-6 4h8m-8 4h5"></svg:path></svg:g>`,
})
export class LucideNotepadTextIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
