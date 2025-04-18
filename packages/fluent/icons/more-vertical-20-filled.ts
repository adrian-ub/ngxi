import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreVertical20FilledIcon],svg[fluent-more-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5A1.75 1.75 0 1 1 10 3a1.75 1.75 0 0 1 0 3.5M10 17a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5m-1.75-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0"></svg:path>`,
})
export class FluentMoreVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
