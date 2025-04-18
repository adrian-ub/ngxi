import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp28RegularIcon],svg[fluent-arrow-up-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.211 12.733a.75.75 0 1 0 1.081 1.04l7.96-8.275v18.753a.75.75 0 1 0 1.5 0V5.5l7.958 8.274a.75.75 0 0 0 1.081-1.04l-9.069-9.428a1 1 0 0 0-1.441 0z"></svg:path>`,
})
export class FluentArrowUp28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
