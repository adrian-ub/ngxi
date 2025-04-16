import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideForwardIcon],svg[lucide-forward-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 17l5-5l-5-5"></svg:path><svg:path d="M4 18v-2a4 4 0 0 1 4-4h12"></svg:path></svg:g>`,
})
export class LucideForwardIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
