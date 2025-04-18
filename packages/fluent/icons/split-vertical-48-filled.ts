import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical48FilledIcon],svg[fluent-split-vertical-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 5.25a1.25 1.25 0 1 0-2.5 0v37.5a1.25 1.25 0 1 0 2.5 0zM39.75 40H27.5V8h12.25A4.25 4.25 0 0 1 44 12.25v23.5A4.25 4.25 0 0 1 39.75 40M21 8H8.25A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40H21z"></svg:path>`,
})
export class FluentSplitVertical48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
