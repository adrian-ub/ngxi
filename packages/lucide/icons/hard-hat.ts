import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHardHatIcon],svg[lucide-hard-hat-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"></svg:path><svg:rect width="20" height="4" x="2" y="15" rx="1"></svg:rect></svg:g>`,
})
export class LucideHardHatIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
