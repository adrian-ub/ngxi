import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMousePointerBanIcon],svg[lucide-mouse-pointer-ban-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"></svg:path><svg:circle cx="16" cy="16" r="6"></svg:circle><svg:path d="m11.8 11.8l8.4 8.4"></svg:path></svg:g>`,
})
export class LucideMousePointerBanIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
