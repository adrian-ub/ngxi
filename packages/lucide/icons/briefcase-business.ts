import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcaseBusinessIcon],svg[lucide-briefcase-business-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"></svg:path><svg:rect width="20" height="14" x="2" y="6" rx="2"></svg:rect></svg:g>`,
})
export class LucideBriefcaseBusinessIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
