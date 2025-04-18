import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight20FilledIcon],svg[fluent-arrow-down-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.25c0 .414.335.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 1 0-1.5 0v5.69L4.28 3.22a.75.75 0 1 0-1.06 1.06L14.44 15.5H8.75a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentArrowDownRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
