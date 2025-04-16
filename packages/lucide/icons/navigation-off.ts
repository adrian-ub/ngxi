import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideNavigationOffIcon],svg[lucide-navigation-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.43 8.43L3 11l8 2l2 8l2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20"></svg:path>`,
})
export class LucideNavigationOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
