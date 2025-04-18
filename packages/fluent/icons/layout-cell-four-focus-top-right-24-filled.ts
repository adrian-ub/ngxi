import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutCellFourFocusTopRight24FilledIcon],svg[fluent-layout-cell-four-focus-top-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h5v6.75H4.5zm0 6.5h6.75v6.75h-5a1.75 1.75 0 0 1-1.75-1.75zm15 0v5a1.75 1.75 0 0 1-1.75 1.75h-5v-6.75z"></svg:path>`,
})
export class FluentLayoutCellFourFocusTopRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
