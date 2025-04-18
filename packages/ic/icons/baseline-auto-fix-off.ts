import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineAutoFixOffIcon],svg[ic-baseline-auto-fix-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 1l-2.5 1.4L18 1l1.4 2.5L18 6l2.5-1.4L23 6l-1.4-2.5zm-8.34 6.22l2.12 2.12l-2.44 2.44l.81.81l2.55-2.55a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0L11.4 8.84l.81.81zm-.78 6.65l-3.75-3.75l-6.86-6.86L2 4.53l6.86 6.86l-6.57 6.57a.996.996 0 0 0 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0l6.57-6.57L19.47 22l1.27-1.27z"></svg:path>`,
})
export class IcBaselineAutoFixOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
