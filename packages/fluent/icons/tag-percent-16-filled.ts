import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagPercent16FilledIcon],svg[fluent-tag-percent-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.587 6.314a1.99 1.99 0 0 0 0 2.822l3.296 3.28a2 2 0 0 0 .64.428a5.5 5.5 0 0 1 7.458-7.254L13 3.01A2 2 0 0 0 10.987 1l-3.25.014a2 2 0 0 0-1.41.584zM10 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M7.5 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5.348-.853a.5.5 0 0 0-.707 0l-3.996 3.996a.5.5 0 0 0 .707.707l3.996-3.996a.5.5 0 0 0 0-.707M12.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FluentTagPercent16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
