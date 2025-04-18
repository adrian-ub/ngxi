import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSquareMultiple24RegularIcon],svg[fluent-add-square-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3A2.25 2.25 0 0 0 3 5.25v11a2.25 2.25 0 0 0 2.25 2.25h11a2.25 2.25 0 0 0 2.25-2.25v-11A2.25 2.25 0 0 0 16.25 3zM4.5 5.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75zM7.75 21a2.25 2.25 0 0 1-2.122-1.5H16.25a3.25 3.25 0 0 0 3.25-3.25V5.628A2.25 2.25 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21zm3-14.5a.75.75 0 0 1 .75.75V10h2.75a.75.75 0 0 1 0 1.5H11.5v2.75a.75.75 0 0 1-1.5 0V11.5H7.25a.75.75 0 0 1 0-1.5H10V7.25a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentAddSquareMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
