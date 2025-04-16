import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideNotepadTextDashedIcon],svg[lucide-notepad-text-dashed-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v4m4-4v4m4-4v4m0-2h2a2 2 0 0 1 2 2v2m0 4v2m0 4v2a2 2 0 0 1-2 2h-1m-4 0h-2m-4 0H6a2 2 0 0 1-2-2v-2m0-4v-2m0-4V6a2 2 0 0 1 2-2h2m0 6h6m-6 4h8m-8 4h5"></svg:path>`,
})
export class LucideNotepadTextDashedIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
