import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSproutIcon],svg[lucide-sprout-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 20h10m-7 0c5.5-2.5.8-6.4 3-10"></svg:path><svg:path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3c-1.2-.6-2.3-1.9-3-4.2c2.8-.5 4.4 0 5.5.8M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4c1-1 1.6-2.3 1.7-4.6c-2.7.1-4 1-4.9 2"></svg:path></svg:g>`,
})
export class LucideSproutIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
