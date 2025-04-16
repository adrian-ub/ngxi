import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePilcrowRightIcon],svg[lucide-pilcrow-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v11m0-5H7a1 1 0 0 1 0-6h8m-1 0v11m4 0l4 4H2m20 0l-4 4"></svg:path>`,
})
export class LucidePilcrowRightIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
