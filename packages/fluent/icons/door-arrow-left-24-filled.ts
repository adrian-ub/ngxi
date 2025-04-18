import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoorArrowLeft24FilledIcon],svg[fluent-door-arrow-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 2.75a1.5 1.5 0 0 0-1.5 1.5v15.5a1.5 1.5 0 0 0 1.5 1.5h5.94a6.5 6.5 0 0 1 7.06-10.012V4.25a1.5 1.5 0 0 0-1.5-1.5zm2.25 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 9.75a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m3.5-5.5a.5.5 0 0 1-.5.5h-4.793l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L15.707 17H20.5a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentDoorArrowLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
