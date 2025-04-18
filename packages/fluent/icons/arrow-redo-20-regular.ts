import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRedo20RegularIcon],svg[fluent-arrow-redo-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.003 2.5a.5.5 0 0 1 1 0v4.9a.6.6 0 0 1-.6.6h-4.9a.5.5 0 0 1 0-1h3.594l-3.473-3.019a4 4 0 1 0-5.248 6.038l8.172 7.104a.5.5 0 1 1-.656.754L4.72 10.774a5 5 0 1 1 6.56-7.547l3.723 3.236z"></svg:path>`,
})
export class FluentArrowRedo20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
