import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFolderSyncIcon],svg[lucide-folder-sync-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"></svg:path><svg:path d="M12 10v4h4"></svg:path><svg:path d="m12 14l1.535-1.605a5 5 0 0 1 8 1.5M22 22v-4h-4"></svg:path><svg:path d="m22 18l-1.535 1.605a5 5 0 0 1-8-1.5"></svg:path></svg:g>`,
})
export class LucideFolderSyncIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
