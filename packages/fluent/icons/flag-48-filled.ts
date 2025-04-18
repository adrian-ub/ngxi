import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlag48FilledIcon],svg[fluent-flag-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 6c-.69 0-1.25.56-1.25 1.25v35.5a1.25 1.25 0 1 0 2.5 0V33h31.25a1.25 1.25 0 0 0 1.007-1.99L33.801 19.5l8.456-11.51A1.25 1.25 0 0 0 41.25 6z"></svg:path>`,
})
export class FluentFlag48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
