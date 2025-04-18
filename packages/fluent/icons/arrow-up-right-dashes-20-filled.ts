import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes20FilledIcon],svg[fluent-arrow-up-right-dashes-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 3a.75.75 0 0 0 0 1.5h5.69l-1.47 1.47a.75.75 0 0 0 1.06 1.06l1.47-1.47v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75zm3.03 6.28a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 1 0 1.06 1.06zm-5 5a.75.75 0 1 0-1.06-1.06l-2.75 2.75a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentArrowUpRightDashes20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
