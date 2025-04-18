import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecord20FilledIcon],svg[fluent-record-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8 4.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path>`,
})
export class FluentRecord20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
