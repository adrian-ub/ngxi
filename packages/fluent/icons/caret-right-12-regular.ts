import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretRight12RegularIcon],svg[fluent-caret-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.994c0-.887 1.07-1.335 1.702-.712l2.037 2.006a1 1 0 0 1 0 1.425L5.702 8.719C5.069 9.34 4 8.893 4 8.006zM7.037 6L5 3.994v4.012z"></svg:path>`,
})
export class FluentCaretRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
