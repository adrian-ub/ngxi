import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLeafIcon],svg[lucide-leaf-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></svg:path><svg:path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></svg:path></svg:g>`,
})
export class LucideLeafIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
