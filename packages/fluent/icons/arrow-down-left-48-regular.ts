import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft48RegularIcon],svg[fluent-arrow-down-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.75 42a1.25 1.25 0 1 0 0-2.5H10.268L41.634 8.134a1.25 1.25 0 0 0-1.768-1.768L8.5 37.732V22.25a1.25 1.25 0 0 0-2.5 0v18.5c0 .69.56 1.25 1.25 1.25z"></svg:path>`,
})
export class FluentArrowDownLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
