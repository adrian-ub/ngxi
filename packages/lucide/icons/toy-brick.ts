import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideToyBrickIcon],svg[lucide-toy-brick-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="12" x="3" y="8" rx="1"></svg:rect><svg:path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3m14 0V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"></svg:path></svg:g>`,
})
export class LucideToyBrickIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
