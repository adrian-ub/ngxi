import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNextFrame24FilledIcon],svg[fluent-next-frame-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0zm6.24-.44C10.577 2.513 9 3.344 9 4.752v14.495c0 1.413 1.589 2.244 2.75 1.437l10.498-7.302a1.75 1.75 0 0 0-.01-2.88z"></svg:path>`,
})
export class FluentNextFrame24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
