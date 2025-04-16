import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFlagIcon],svg[lucide-flag-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15s1-1 4-1s5 2 8 2s4-1 4-1V3s-1 1-4 1s-5-2-8-2s-4 1-4 1zm0 7v-7"></svg:path>`,
})
export class LucideFlagIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
