import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight48RegularIcon],svg[fluent-arrow-down-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.25 42a1.25 1.25 0 1 1 0-2.5h15.482L6.366 8.134a1.25 1.25 0 1 1 1.768-1.768L39.5 37.732V22.25a1.25 1.25 0 0 1 2.5 0v18.5c0 .69-.56 1.25-1.25 1.25z"></svg:path>`,
})
export class FluentArrowDownRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
