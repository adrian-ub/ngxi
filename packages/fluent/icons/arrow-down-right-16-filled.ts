import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight16FilledIcon],svg[fluent-arrow-down-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13.25c0 .414.335.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-1.5 0v3.69L3.28 2.22a.75.75 0 1 0-1.06 1.06l9.22 9.22H7.75a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentArrowDownRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
