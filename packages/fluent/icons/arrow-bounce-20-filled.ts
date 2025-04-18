import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce20FilledIcon],svg[fluent-arrow-bounce-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 6a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V8.56l6.47 6.47a.75.75 0 0 0 1.06 0l6.754-6.754a.75.75 0 0 0-1.06-1.06L10.5 13.439L4.56 7.5h4.69a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArrowBounce20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
