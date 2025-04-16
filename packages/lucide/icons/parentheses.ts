import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideParenthesesIcon],svg[lucide-parentheses-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9"></svg:path>`,
})
export class LucideParenthesesIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
