import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGlobeLockIcon],svg[lucide-globe-lock-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20a10 10 0 1 0 9.542 13M2 12h8.5M20 6V4a2 2 0 1 0-4 0v2"></svg:path><svg:rect width="8" height="5" x="14" y="6" rx="1"></svg:rect></svg:g>`,
})
export class LucideGlobeLockIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
