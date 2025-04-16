import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePercentIcon],svg[lucide-percent-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 5L5 19"></svg:path><svg:circle cx="6.5" cy="6.5" r="2.5"></svg:circle><svg:circle cx="17.5" cy="17.5" r="2.5"></svg:circle></svg:g>`,
})
export class LucidePercentIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
