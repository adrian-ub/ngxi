import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight48FilledIcon],svg[fluent-arrow-down-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 42a1.5 1.5 0 0 1 0-3h14.379L6.439 8.56a1.5 1.5 0 1 1 2.122-2.12L39 36.878V22.5a1.5 1.5 0 0 1 3 0v18a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class FluentArrowDownRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
