import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideMultipleArrowRight24FilledIcon],svg[fluent-slide-multiple-arrow-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.75A4.75 4.75 0 0 1 6.75 3h10A2.25 2.25 0 0 1 19 5.25v.25H7.75A3.25 3.25 0 0 0 4.5 8.75V17h-.25A2.25 2.25 0 0 1 2 14.75zM7.75 6.5A2.25 2.25 0 0 0 5.5 8.75v9.5a2.25 2.25 0 0 0 2.25 2.25h3.982A6.5 6.5 0 0 1 22 12.81V8.75a2.25 2.25 0 0 0-2.25-2.25zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17z"></svg:path>`,
})
export class FluentSlideMultipleArrowRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
