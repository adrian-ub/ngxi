import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowDownRightIcon],svg[akar-icons-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18L6 6m2 12h10V8"></svg:path>`,
})
export class AkarIconsArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
