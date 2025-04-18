import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowWrapUpToDown20RegularIcon],svg[fluent-arrow-wrap-up-to-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14a3 3 0 1 0 6 0V6a2 2 0 1 1 4 0v10.293l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V6a3 3 0 1 0-6 0v8a2 2 0 1 1-4 0V3.5a.5.5 0 0 0-1 0z"></svg:path>`,
})
export class FluentArrowWrapUpToDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
