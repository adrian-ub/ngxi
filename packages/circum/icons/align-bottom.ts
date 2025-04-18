import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumAlignBottomIcon],svg[circum-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.548 20.922h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1M9 18.919H6.565a2.5 2.5 0 0 1-2.5-2.5V5.578a2.5 2.5 0 0 1 2.5-2.5H9a2.5 2.5 0 0 1 2.5 2.5v10.841a2.5 2.5 0 0 1-2.5 2.5M6.565 4.078a1.5 1.5 0 0 0-1.5 1.5v10.841a1.5 1.5 0 0 0 1.5 1.5H9a1.5 1.5 0 0 0 1.5-1.5V5.578a1.5 1.5 0 0 0-1.5-1.5Zm10.872 14.841H15a2.5 2.5 0 0 1-2.5-2.5V10.55a2.5 2.5 0 0 1 2.5-2.5h2.434a2.5 2.5 0 0 1 2.5 2.5v5.869a2.5 2.5 0 0 1-2.497 2.5M15 9.05a1.5 1.5 0 0 0-1.5 1.5v5.869a1.5 1.5 0 0 0 1.5 1.5h2.434a1.5 1.5 0 0 0 1.5-1.5V10.55a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
