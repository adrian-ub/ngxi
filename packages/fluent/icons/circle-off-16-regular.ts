import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleOff16RegularIcon],svg[fluent-circle-off-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.874 12.582l2.272 2.272a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l2.272 2.272a6 6 0 0 0 8.456 8.456m-.71-.71a5 5 0 0 1-7.036-7.036zM13 8c0 .834-.204 1.621-.566 2.313l.735.735A6 6 0 0 0 4.952 2.83l.735.735A5 5 0 0 1 13 8"></svg:path>`,
})
export class FluentCircleOff16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
