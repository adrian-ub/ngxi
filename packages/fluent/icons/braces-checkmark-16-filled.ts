import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBracesCheckmark16FilledIcon],svg[fluent-braces-checkmark-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v3a.5.5 0 0 1-.5.5a.5.5 0 0 0 0 1A.5.5 0 0 1 2 9v3a2 2 0 0 0 2 2a.5.5 0 0 0 0-1a1 1 0 0 1-1-1V9c0-.384-.144-.735-.382-1C2.856 7.735 3 7.384 3 7V4a1 1 0 0 1 1-1a.5.5 0 0 0 0-1m8 0a2 2 0 0 1 2 2v3a.5.5 0 0 0 .5.5a.5.5 0 0 1 0 1a.5.5 0 0 0-.5.5v3a2 2 0 0 1-2 2a.5.5 0 0 1 0-1a1 1 0 0 0 1-1V9c0-.384.144-.735.382-1A1.5 1.5 0 0 1 13 7V4a1 1 0 0 0-1-1a.5.5 0 0 1 0-1M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m1.146-5.354a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647z"></svg:path>`,
})
export class FluentBracesCheckmark16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
