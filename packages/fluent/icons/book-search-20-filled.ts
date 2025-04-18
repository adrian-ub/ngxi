import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookSearch20FilledIcon],svg[fluent-book-search-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm5.586 7.879l1.268 1.267a.5.5 0 0 1-.708.708l-1.267-1.268a2.5 2.5 0 1 1 .707-.707M8 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class FluentBookSearch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
