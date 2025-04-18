import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenPagination24FilledIcon],svg[fluent-dual-screen-pagination-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.245 4.004c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V4.023q.125-.018.256-.019zm-9.247-.002q.125 0 .245.017V19.98q-.12.017-.245.017H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zM17.625 16.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.5 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-5 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class FluentDualScreenPagination24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
