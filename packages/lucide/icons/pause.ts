import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePauseIcon],svg[lucide-pause-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="4" height="16" x="14" y="4" rx="1"></svg:rect><svg:rect width="4" height="16" x="6" y="4" rx="1"></svg:rect></svg:g>`,
})
export class LucidePauseIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
