import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowWrapUpToDown20FilledIcon],svg[fluent-arrow-wrap-up-to-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.75a3.25 3.25 0 0 0 6.5 0v-7.5a1.75 1.75 0 1 1 3.5 0v9.19l-.22-.22a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22V6.25a3.25 3.25 0 0 0-6.5 0v7.5a1.75 1.75 0 1 1-3.5 0v-10a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class FluentArrowWrapUpToDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
