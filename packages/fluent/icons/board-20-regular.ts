import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoard20RegularIcon],svg[fluent-board-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v1.058l5.5-.053V4zm4.5 0v8H16V6a2 2 0 0 0-2-2zm5.5 9h-5.5v3H14a2 2 0 0 0 2-2zm-6.5 3V8.005L4 8.058V14a2 2 0 0 0 2 2z"></svg:path>`,
})
export class FluentBoard20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
