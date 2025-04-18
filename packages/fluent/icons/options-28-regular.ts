import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOptions28RegularIcon],svg[fluent-options-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 6a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 0 1 0-4.5m-15 3h11.325a3.751 3.751 0 0 0 7.35 0h3.825a.75.75 0 0 0 0-1.5h-3.825a3.751 3.751 0 0 0-7.35 0H2.75a.75.75 0 0 0 0 1.5m7.5 8.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0-1.5a3.75 3.75 0 0 1 3.675 3H25.25a.75.75 0 0 1 0 1.5H13.925a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h3.825a3.75 3.75 0 0 1 3.675-3"></svg:path>`,
})
export class FluentOptions28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
