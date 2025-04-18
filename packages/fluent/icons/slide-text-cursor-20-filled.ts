import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideTextCursor20FilledIcon],svg[fluent-slide-text-cursor-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v6.335l-4.44-4.4A1.5 1.5 0 0 0 11.004 9.5H5.5a.5.5 0 0 0 0 1h5.504L11 16H4.5A2.5 2.5 0 0 1 2 13.5zm3.5.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm7.356-2.854a.5.5 0 0 0-.852.354l-.004 8a.5.5 0 0 0 .9.301l1.994-2.647l3.497.776a.5.5 0 0 0 .46-.843z"></svg:path>`,
})
export class FluentSlideTextCursor20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
