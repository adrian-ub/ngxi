import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTramFrontIcon],svg[lucide-tram-front-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="16" x="4" y="3" rx="2"></svg:rect><svg:path d="M4 11h16m-8-8v8m-4 8l-2 3m12 0l-2-3m-8-4h.01M16 15h.01"></svg:path></svg:g>`,
})
export class LucideTramFrontIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
