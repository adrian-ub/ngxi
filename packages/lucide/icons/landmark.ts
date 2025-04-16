import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLandmarkIcon],svg[lucide-landmark-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 22h18M6 18v-7m4 7v-7m4 7v-7m4 7v-7m-6-9l8 5H4z"></svg:path>`,
})
export class LucideLandmarkIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
