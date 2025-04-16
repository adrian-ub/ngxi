import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMoveRightIcon],svg[lucide-move-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 8l4 4l-4 4M2 12h20"></svg:path>`,
})
export class LucideMoveRightIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
