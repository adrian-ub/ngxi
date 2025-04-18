import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAdd32RegularIcon],svg[fluent-add-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a1 1 0 0 1 1 1v11h11a1 1 0 1 1 0 2H17v11a1 1 0 1 1-2 0V17H4a1 1 0 1 1 0-2h11V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentAdd32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
