import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignConstraintIcon],svg[tdesign-constraint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8H6.2C3.83 8.026 2 9.851 2 12s1.83 3.975 4.2 4H10v2H6.186C2.809 17.967 0 15.338 0 12s2.81-5.967 6.186-6H10zm4-2h3.75C21.155 6 24 8.641 24 12s-2.845 6-6.25 6H14v-2h3.75c2.394 0 4.25-1.836 4.25-4s-1.856-4-4.25-4H14zm-7 5h10v2H7z"></svg:path>`,
})
export class TdesignConstraintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
