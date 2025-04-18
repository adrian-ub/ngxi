import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlert48FilledIcon],svg[fluent-alert-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4C15.716 4 9 10.716 9 19v8.487l-2.804 6.355A2.25 2.25 0 0 0 8.254 37h31.492a2.25 2.25 0 0 0 2.058-3.158L39 27.487V19c0-8.284-6.716-15-15-15m0 40a6 6 0 0 1-5.917-5h11.834A6 6 0 0 1 24 44"></svg:path>`,
})
export class FluentAlert48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
