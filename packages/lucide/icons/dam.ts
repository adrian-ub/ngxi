import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDamIcon],svg[lucide-dam-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1m-10.25 6c.35.5 1.45 1 2.75 1c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 10h4m-4 4h4m-4 4h4M2 6h4"></svg:path><svg:path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class LucideDamIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
