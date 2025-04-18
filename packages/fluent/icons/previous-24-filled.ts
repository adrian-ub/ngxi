import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPrevious24FilledIcon],svg[fluent-previous-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0zm18 1.003c0-1.408-1.578-2.24-2.74-1.444L7.763 10.503a1.75 1.75 0 0 0-.01 2.88l10.499 7.302c1.16.807 2.749-.024 2.749-1.437z"></svg:path>`,
})
export class FluentPrevious24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
