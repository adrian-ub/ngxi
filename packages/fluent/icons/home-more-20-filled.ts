import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeMore20FilledIcon],svg[fluent-home-more-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.003 2.384a1.5 1.5 0 0 0-2.005 0l-5.5 4.943A1.5 1.5 0 0 0 3 8.443V15.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V8.443a1.5 1.5 0 0 0-.497-1.116zM7 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentHomeMore20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
