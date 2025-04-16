import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBedIcon],svg[lucide-bed-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"></svg:path>`,
})
export class LucideBedIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
