import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClover32FilledIcon],svg[fluent-clover-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a6.5 6.5 0 0 0 0 13H14a1 1 0 0 0 1-1V8.5A6.5 6.5 0 0 0 8.5 2m0 28a6.5 6.5 0 1 1 0-13H14a1 1 0 0 1 1 1v5.5A6.5 6.5 0 0 1 8.5 30m15-28a6.5 6.5 0 1 1 0 13H18a1 1 0 0 1-1-1V8.5A6.5 6.5 0 0 1 23.5 2m0 28a6.5 6.5 0 1 0 0-13H18a1 1 0 0 0-1 1v5.5a6.5 6.5 0 0 0 6.5 6.5"></svg:path>`,
})
export class FluentClover32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
