import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowWrapUpToDown32RegularIcon],svg[fluent-arrow-wrap-up-to-down-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a1 1 0 0 0-1 1v19.5a5.5 5.5 0 1 0 11 0v-15a3.5 3.5 0 1 1 7 0v18.086l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L26 26.586V8.5a5.5 5.5 0 1 0-11 0v15a3.5 3.5 0 1 1-7 0V4a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentArrowWrapUpToDown32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
