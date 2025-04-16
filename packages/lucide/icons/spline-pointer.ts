import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSplinePointerIcon],svg[lucide-spline-pointer-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 17A12 12 0 0 1 17 5"></svg:path><svg:circle cx="19" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LucideSplinePointerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
