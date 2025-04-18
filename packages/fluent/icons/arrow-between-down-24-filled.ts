import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBetweenDown24FilledIcon],svg[fluent-arrow-between-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.25a1 1 0 0 0-2 0v.25A2.5 2.5 0 0 0 7 5h10a2.5 2.5 0 0 0 2.5-2.5v-.25a1 1 0 1 0-2 0v.25a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zm5.5 4a1 1 0 0 1 1 1v7.086l2.793-2.793a1 1 0 0 1 1.414 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 1 1 1.414-1.414L11 14.336V7.25a1 1 0 0 1 1-1M4.5 21.5A2.5 2.5 0 0 1 7 19h10a2.5 2.5 0 0 1 2.5 2.5v.25a1 1 0 1 1-2 0v-.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v.25a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentArrowBetweenDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
