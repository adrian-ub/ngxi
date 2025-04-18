import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyAll32LightIcon],svg[fluent-arrow-reply-all-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.854 6.146a.5.5 0 0 1 0 .708L4.207 13.5l6.647 6.646a.5.5 0 0 1-.708.708l-7-7a.5.5 0 0 1 0-.708l7-7a.5.5 0 0 1 .708 0m6 0a.5.5 0 0 1 0 .708L10.707 13H16.5C23.404 13 29 18.596 29 25.5a.5.5 0 0 1-1 0C28 19.149 22.851 14 16.5 14h-5.793l6.147 6.146a.5.5 0 0 1-.708.708l-7-7a.5.5 0 0 1 0-.708l7-7a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowReplyAll32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
