import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLampFloorIcon],svg[lucide-lamp-floor-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 2h6l3 7H6zm3 7v13m-3 0h6"></svg:path>`,
})
export class LucideLampFloorIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
