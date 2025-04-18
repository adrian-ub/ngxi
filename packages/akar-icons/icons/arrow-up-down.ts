import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowUpDownIcon],svg[akar-icons-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3v18M6 3l4 4M6 3L2 7m16 14V3m0 18l4-4m-4 4l-4-4"></svg:path>`,
})
export class AkarIconsArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
