import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTurtleIcon],svg[lucide-turtle-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 10l2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4zM4.82 7.9L8 10m7.18-2.1L12 10"></svg:path><svg:path d="M16.93 10H20a2 2 0 0 1 0 4H2"></svg:path></svg:g>`,
})
export class LucideTurtleIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
