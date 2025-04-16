import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMoveUpRightIcon],svg[lucide-move-up-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5h6v6m0-6L5 19"></svg:path>`,
})
export class LucideMoveUpRightIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
