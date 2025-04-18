import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal48FilledIcon],svg[fluent-split-horizontal-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.75 25.5a1.25 1.25 0 1 0 0-2.5H5.25a1.25 1.25 0 1 0 0 2.5zM8 39.75V27.5h32v12.25A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75M40 21V8.25A4.25 4.25 0 0 0 35.75 4h-23.5A4.25 4.25 0 0 0 8 8.25V21z"></svg:path>`,
})
export class FluentSplitHorizontal48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
