import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAdd48RegularIcon],svg[fluent-add-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5.25c.69 0 1.25.56 1.25 1.25v16.25H41.5a1.25 1.25 0 1 1 0 2.5H25.25V41.5a1.25 1.25 0 1 1-2.5 0V25.25H6.5a1.25 1.25 0 1 1 0-2.5h16.25V6.5c0-.69.56-1.25 1.25-1.25"></svg:path>`,
})
export class FluentAdd48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
