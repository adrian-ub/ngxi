import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideProportionsIcon],svg[lucide-proportions-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:path d="M12 9v11M2 9h13a2 2 0 0 1 2 2v9"></svg:path></svg:g>`,
})
export class LucideProportionsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
