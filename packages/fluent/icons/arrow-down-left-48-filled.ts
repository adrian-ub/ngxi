import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft48FilledIcon],svg[fluent-arrow-down-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 42a1.5 1.5 0 0 0 0-3H11.121l30.44-30.44a1.5 1.5 0 0 0-2.122-2.12L9 36.878V22.5a1.5 1.5 0 0 0-3 0v18A1.5 1.5 0 0 0 7.5 42z"></svg:path>`,
})
export class FluentArrowDownLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
