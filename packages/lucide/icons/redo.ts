import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRedoIcon],svg[lucide-redo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 7v6h-6"></svg:path><svg:path d="M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7"></svg:path></svg:g>`,
})
export class LucideRedoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
