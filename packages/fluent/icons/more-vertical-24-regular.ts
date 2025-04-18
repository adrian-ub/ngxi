import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreVertical24RegularIcon],svg[fluent-more-vertical-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5m0 6a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5M10.25 18a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0"></svg:path>`,
})
export class FluentMoreVertical24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
