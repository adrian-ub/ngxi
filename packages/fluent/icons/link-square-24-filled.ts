import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLinkSquare24FilledIcon],svg[fluent-link-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.502 3.003a3.5 3.5 0 0 0-3.5 3.5v6a3.5 3.5 0 0 0 3.5 3.5H7v-2h-.497a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-1.506v2h1.506a3.5 3.5 0 0 0 3.5-3.5v-6a3.5 3.5 0 0 0-3.5-3.5zM10 11.5a1.5 1.5 0 0 1 1.5-1.5h1.499V8H11.5A3.5 3.5 0 0 0 8 11.5v6a3.5 3.5 0 0 0 3.5 3.5h6a3.5 3.5 0 0 0 3.5-3.5v-6A3.5 3.5 0 0 0 17.5 8h-.495v2h.495a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5z"></svg:path>`,
})
export class FluentLinkSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
