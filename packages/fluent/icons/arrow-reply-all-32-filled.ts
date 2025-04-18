import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyAll32FilledIcon],svg[fluent-arrow-reply-all-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.134 6.366a1.25 1.25 0 0 1 0 1.768L6.018 14.25l6.116 6.116a1.25 1.25 0 0 1-1.768 1.768l-7-7a1.25 1.25 0 0 1 0-1.768l7-7a1.25 1.25 0 0 1 1.768 0m7 0a1.25 1.25 0 0 1 0 1.768L14.268 13h2.482C23.515 13 29 18.485 29 25.25v.5a1.25 1.25 0 1 1-2.5 0v-.5a9.75 9.75 0 0 0-9.75-9.75h-2.482l4.866 4.866a1.25 1.25 0 0 1-1.768 1.768l-7-7a1.25 1.25 0 0 1 0-1.768l7-7a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentArrowReplyAll32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
