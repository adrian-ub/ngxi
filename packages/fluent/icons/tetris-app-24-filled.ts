import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTetrisApp24FilledIcon],svg[fluent-tetris-app-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a1 1 0 0 1 1-1h4v5H8zM3 8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4V8zm10 0H8v5h4a1 1 0 0 0 1-1zm5-6h-4v5h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4 17a1 1 0 0 1 1-1h4v5H5a1 1 0 0 1-1-1zm11-1h-5v5h5zm1 0h5v4a1 1 0 0 1-1 1h-4zm1-6a1 1 0 0 0-1 1v4h5v-4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentTetrisApp24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
