import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDiameterIcon],svg[lucide-diameter-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="19" cy="19" r="2"></svg:circle><svg:circle cx="5" cy="5" r="2"></svg:circle><svg:path d="M6.48 3.66a10 10 0 0 1 13.86 13.86M6.41 6.41l11.18 11.18M3.66 6.48a10 10 0 0 0 13.86 13.86"></svg:path></svg:g>`,
})
export class LucideDiameterIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
