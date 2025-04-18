import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoChat28FilledIcon],svg[fluent-video-chat-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.75A3.75 3.75 0 0 1 5.75 6h8.5A3.75 3.75 0 0 1 18 9.75v8.5a3.75 3.75 0 0 1-3.416 3.735A7.5 7.5 0 0 0 2 14.407zm21.252 10.933L19 17.747V10.25l4.252-2.936c1.16-.802 2.744.03 2.744 1.44v10.49c0 1.41-1.583 2.241-2.744 1.44M14.005 19.5a6.5 6.5 0 0 1-9.648 5.688l-2.717.791a.5.5 0 0 1-.62-.62l.795-2.713a6.5 6.5 0 1 1 12.19-3.146m-9-1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1h-2.5a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentVideoChat28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
