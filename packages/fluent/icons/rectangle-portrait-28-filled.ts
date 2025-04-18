import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectanglePortrait28FilledIcon],svg[fluent-rectangle-portrait-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.002 22.248a3.75 3.75 0 0 0 3.75 3.75h12.5a3.75 3.75 0 0 0 3.75-3.75V5.752a3.75 3.75 0 0 0-3.75-3.75h-12.5a3.75 3.75 0 0 0-3.75 3.75z"></svg:path>`,
})
export class FluentRectanglePortrait28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
