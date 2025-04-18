import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes24RegularIcon],svg[fluent-arrow-up-right-dashes-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 3a.75.75 0 0 0 0 1.5h7.67L16.92 6h.02l-1.72 1.72a.75.75 0 0 0 1.06 1.06L18 7.06v.022l1.5-1.5v7.668a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-.75-.75zM3 20.318a1 1 0 0 1 0-.155zm.75.682a.747.747 0 0 1-.75-.75c0-.192.073-.384.22-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-.53.22m0 0h-.076a1 1 0 0 0 .174 0zm9.78-9.47a.75.75 0 1 0-1.06-1.06l-3.25 3.25a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentArrowUpRightDashes24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
