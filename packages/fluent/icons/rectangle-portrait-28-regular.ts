import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectanglePortrait28RegularIcon],svg[fluent-rectangle-portrait-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.752 25.998a3.75 3.75 0 0 1-3.75-3.75V5.752a3.75 3.75 0 0 1 3.75-3.75h12.5a3.75 3.75 0 0 1 3.75 3.75v16.496a3.75 3.75 0 0 1-3.75 3.75zm-2.25-3.75a2.25 2.25 0 0 0 2.25 2.25h12.5a2.25 2.25 0 0 0 2.25-2.25V5.752a2.25 2.25 0 0 0-2.25-2.25h-12.5a2.25 2.25 0 0 0-2.25 2.25z"></svg:path>`,
})
export class FluentRectanglePortrait28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
