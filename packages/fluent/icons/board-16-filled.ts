import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoard16FilledIcon],svg[fluent-board-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2v3H2v-.5A2.5 2.5 0 0 1 4.5 2zm1 0v8H14V4.5A2.5 2.5 0 0 0 11.5 2zm5.5 9H8.5v3h3a2.5 2.5 0 0 0 2.5-2.5zm-6.5 3V6H2v5.5A2.5 2.5 0 0 0 4.5 14z"></svg:path>`,
})
export class FluentBoard16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
