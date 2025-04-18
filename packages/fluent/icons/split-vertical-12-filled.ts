import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical12FilledIcon],svg[fluent-split-vertical-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm-5 2A1.5 1.5 0 0 1 2.5 2H4v8H2.5A1.5 1.5 0 0 1 1 8.5zM7 10h1.5A1.5 1.5 0 0 0 10 8.5v-5A1.5 1.5 0 0 0 8.5 2H7z"></svg:path>`,
})
export class FluentSplitVertical12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
