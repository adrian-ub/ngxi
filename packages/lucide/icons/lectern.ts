import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLecternIcon],svg[lucide-lectern-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"></svg:path><svg:path d="M18 6V3a1 1 0 0 0-1-1h-3"></svg:path><svg:rect width="8" height="12" x="8" y="10" rx="1"></svg:rect></svg:g>`,
})
export class LucideLecternIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
