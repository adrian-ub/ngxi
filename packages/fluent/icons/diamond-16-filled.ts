import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond16FilledIcon],svg[fluent-diamond-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.732 6.233a2.5 2.5 0 0 0 0 3.536l4.501 4.5a2.5 2.5 0 0 0 3.536 0l4.5-4.5a2.5 2.5 0 0 0 0-3.536l-4.5-4.5a2.5 2.5 0 0 0-3.536 0z"></svg:path>`,
})
export class FluentDiamond16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
