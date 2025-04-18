import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp24FilledIcon],svg[fluent-arrow-up-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.284 10.295a1 1 0 0 0 1.424 1.404L11 6.329v13.67a1 1 0 1 0 2 0V6.335l5.285 5.364a1 1 0 0 0 1.424-1.404L12.887 3.37a1.25 1.25 0 0 0-1.78 0z"></svg:path>`,
})
export class FluentArrowUp24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
