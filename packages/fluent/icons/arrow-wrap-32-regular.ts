import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowWrap32RegularIcon],svg[fluent-arrow-wrap-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a1 1 0 0 1 1-1h19.5a5.5 5.5 0 1 1 0 11h-15a3.5 3.5 0 1 0 0 7h18.086l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L26.586 26H8.5a5.5 5.5 0 1 1 0-11h15a3.5 3.5 0 1 0 0-7H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentArrowWrap32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
