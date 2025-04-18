import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFillAccent24RegularIcon],svg[fluent-color-fill-accent-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.052 15c.273 1.61 1.58 3 3.448 3c1.842 0 3.14-1.354 3.436-2.936A1.5 1.5 0 0 1 21 16.5v3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-3A1.5 1.5 0 0 1 4.5 15h3.09a3 3 0 0 0 4.048 0z"></svg:path>`,
})
export class FluentColorFillAccent24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
