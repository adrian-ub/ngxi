import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBadgePoundSterlingIcon],svg[lucide-badge-pound-sterling-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M8 12h4"></svg:path><svg:path d="M10 16V9.5a2.5 2.5 0 0 1 5 0M8 16h7"></svg:path></svg:g>`,
})
export class LucideBadgePoundSterlingIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
