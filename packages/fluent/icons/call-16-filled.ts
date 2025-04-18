import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCall16FilledIcon],svg[fluent-call-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.756 7.024L7.83 6.04a2 2 0 0 0 .52-2.176l-.458-1.223a1.916 1.916 0 0 0-2.354-1.16c-1.716.525-3.035 2.12-2.629 4.014c.267 1.246.778 2.81 1.746 4.474c.97 1.668 2.078 2.9 3.028 3.766c1.434 1.305 3.484.979 4.803-.251a1.9 1.9 0 0 0 .171-2.596l-.84-1.02A2 2 0 0 0 9.67 9.23l-1.388.437a6.6 6.6 0 0 1-.936-1.223a6.3 6.3 0 0 1-.59-1.421"></svg:path>`,
})
export class FluentCall16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
