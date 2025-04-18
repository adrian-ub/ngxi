import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark48FilledIcon],svg[fluent-checkmark-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.317 12.695a1.5 1.5 0 0 1-.012 2.122l-22.25 22a1.5 1.5 0 0 1-2.101.008l-9.25-9a1.5 1.5 0 1 1 2.092-2.15l8.196 7.974l21.203-20.966a1.5 1.5 0 0 1 2.122.012"></svg:path>`,
})
export class FluentCheckmark48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
