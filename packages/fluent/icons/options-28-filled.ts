import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOptions28FilledIcon],svg[fluent-options-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 9h11.325a3.751 3.751 0 0 0 7.35 0h3.825a.75.75 0 0 0 0-1.5h-3.825a3.751 3.751 0 0 0-7.35 0H2.75a.75.75 0 0 0 0 1.5m7.5 14.5a3.75 3.75 0 0 1-3.675-3H2.75a.75.75 0 0 1 0-1.5h3.825a3.751 3.751 0 0 1 7.35 0H25.25a.75.75 0 0 1 0 1.5H13.925a3.75 3.75 0 0 1-3.675 3"></svg:path>`,
})
export class FluentOptions28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
