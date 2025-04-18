import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x24RegularIcon],svg[fluent-multiplier-1x-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.75a.75.75 0 0 0-1.39-.39l-.006.009l-.027.041l-.114.17a8 8 0 0 1-.457.588c-.402.474-.966 1.034-1.642 1.439a.75.75 0 1 0 .772 1.286A7.7 7.7 0 0 0 8.5 9.833v6.417a.75.75 0 0 0 1.5 0zm3.28 4.47a.75.75 0 0 0-1.06 1.06l1.22 1.22l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 0 0 1.06-1.06l-1.22-1.22l1.22-1.22a.75.75 0 1 0-1.06-1.06l-1.22 1.22z"></svg:path>`,
})
export class FluentMultiplier1x24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
