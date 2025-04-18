import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlow16FilledIcon],svg[fluent-flow-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.05 6H9.5a1 1 0 0 0-1 1v2a2 2 0 0 1-2 2h-.55a2.5 2.5 0 1 1 0-1h.55a1 1 0 0 0 1-1V7a2 2 0 0 1 2-2h.55a2.5 2.5 0 1 1 0 1"></svg:path>`,
})
export class FluentFlow16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
