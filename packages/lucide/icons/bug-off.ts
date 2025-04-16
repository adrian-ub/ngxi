import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBugOffIcon],svg[lucide-bug-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2m6.12 1.88L16 2"></svg:path><svg:path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"></svg:path><svg:path d="M20.97 5c0 2.1-1.6 3.8-3.5 4M2 2l20 20M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13M12 20v-8m-6 1H2"></svg:path><svg:path d="M3 21c0-2.1 1.7-3.9 3.8-4"></svg:path></svg:g>`,
})
export class LucideBugOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
