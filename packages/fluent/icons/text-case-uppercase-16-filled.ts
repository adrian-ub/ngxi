import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextCaseUppercase16FilledIcon],svg[fluent-text-case-uppercase-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2.25a.75.75 0 0 1 .704.49l3.5 9.5a.75.75 0 0 1-1.408.52l-.924-2.51H2.628l-.924 2.51a.75.75 0 1 1-1.408-.52l3.5-9.5a.75.75 0 0 1 .704-.49m0 2.92L3.181 8.75H5.82zm5.25-2.92A.75.75 0 0 0 9 3v9.5c0 .414.336.75.75.75h2.5a3.25 3.25 0 0 0 1.57-6.097A3 3 0 0 0 11.5 2.25zm3.25 3a1.5 1.5 0 0 1-1.5 1.5h-1v-3h1a1.5 1.5 0 0 1 1.5 1.5m-.75 6.5H10.5v-3.5h1.75a1.75 1.75 0 1 1 0 3.5"></svg:path>`,
})
export class FluentTextCaseUppercase16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
