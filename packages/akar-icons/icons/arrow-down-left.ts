import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowDownLeftIcon],svg[akar-icons-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 8v10h10"></svg:path>`,
})
export class AkarIconsArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
