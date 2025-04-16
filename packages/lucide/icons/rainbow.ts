import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRainbowIcon],svg[lucide-rainbow-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 17a10 10 0 0 0-20 0"></svg:path><svg:path d="M6 17a6 6 0 0 1 12 0"></svg:path><svg:path d="M10 17a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class LucideRainbowIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
