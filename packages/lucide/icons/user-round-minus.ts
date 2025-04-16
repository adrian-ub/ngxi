import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundMinusIcon],svg[lucide-user-round-minus-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 21a8 8 0 0 1 13.292-6"></svg:path><svg:circle cx="10" cy="8" r="5"></svg:circle><svg:path d="M22 19h-6"></svg:path></svg:g>`,
})
export class LucideUserRoundMinusIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
