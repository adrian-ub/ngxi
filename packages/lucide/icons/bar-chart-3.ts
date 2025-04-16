import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBarChart3Icon],svg[lucide-bar-chart-3-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3"></svg:path>`,
})
export class LucideBarChart3Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
