import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGrid2x2Icon],svg[lucide-grid-2x2-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3v18m-9-9h18"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect></svg:g>`,
})
export class LucideGrid2x2Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
