import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce16FilledIcon],svg[fluent-arrow-bounce-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.002 4.75a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V6.561l5.718 5.72a.75.75 0 0 0 1.06 0l5.5-5.5a.75.75 0 1 0-1.06-1.061l-4.97 4.97L3.562 5.5h3.69a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class FluentArrowBounce16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
