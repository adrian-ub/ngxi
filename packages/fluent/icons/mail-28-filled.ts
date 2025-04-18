import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMail28FilledIcon],svg[fluent-mail-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v.01l-12 6.147L2.004 7.764zm0 1.699v9.801A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V9.446l-11.658 5.972a.75.75 0 0 1-.684 0z"></svg:path>`,
})
export class FluentMail28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
