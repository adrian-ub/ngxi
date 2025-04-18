import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight32FilledIcon],svg[fluent-arrow-down-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 29a1.25 1.25 0 0 1 0-2.5h9.482L3.366 5.134a1.25 1.25 0 1 1 1.768-1.768L26.5 24.732V15.25a1.25 1.25 0 1 1 2.5 0v12.5c0 .69-.56 1.25-1.25 1.25z"></svg:path>`,
})
export class FluentArrowDownRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
