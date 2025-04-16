import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMoonStarIcon],svg[lucide-moon-star-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9m8 0v4m2-2h-4"></svg:path>`,
})
export class LucideMoonStarIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
