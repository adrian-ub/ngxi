import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore16FilledIcon],svg[fluent-more-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 6.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm4 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm4 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentMore16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
