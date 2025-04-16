import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideProjectorIcon],svg[lucide-projector-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 7L3 5m6 1V3m4 4l2-2"></svg:path><svg:circle cx="9" cy="13" r="3"></svg:circle><svg:path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17M16 16h2"></svg:path></svg:g>`,
})
export class LucideProjectorIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
