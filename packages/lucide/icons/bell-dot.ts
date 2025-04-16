import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBellDotIcon],svg[lucide-bell-dot-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.268 21a2 2 0 0 0 3.464 0m.184-18.686A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673a9 9 0 0 1-.585-.665"></svg:path><svg:circle cx="18" cy="8" r="3"></svg:circle></svg:g>`,
})
export class LucideBellDotIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
