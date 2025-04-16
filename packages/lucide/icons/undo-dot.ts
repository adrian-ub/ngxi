import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUndoDotIcon],svg[lucide-undo-dot-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 17a9 9 0 0 0-15-6.7L3 13"></svg:path><svg:path d="M3 7v6h6"></svg:path><svg:circle cx="12" cy="17" r="1"></svg:circle></svg:g>`,
})
export class LucideUndoDotIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
