import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePiIcon],svg[lucide-square-pi-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M7 7h10m-7 0v10m6 0a2 2 0 0 1-2-2V7"></svg:path></svg:g>`,
})
export class LucideSquarePiIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
