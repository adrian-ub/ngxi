import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideo28FilledIcon],svg[fluent-video-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.75A3.75 3.75 0 0 1 5.75 6h8.5A3.75 3.75 0 0 1 18 9.75v8.5A3.75 3.75 0 0 1 14.25 22h-8.5A3.75 3.75 0 0 1 2 18.25zm21.252 10.933L19 17.747V10.25l4.252-2.936c1.16-.802 2.744.03 2.744 1.44v10.49c0 1.41-1.583 2.241-2.744 1.44"></svg:path>`,
})
export class FluentVideo28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
