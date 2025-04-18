import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineDownLeft24FilledIcon],svg[fluent-arrow-outline-down-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.166 21.986a1.95 1.95 0 0 1-2.154-2.153L3.352 7.77c.181-1.625 2.161-2.32 3.317-1.163l1.268 1.267L13.24 2.57a1.95 1.95 0 0 1 2.758 0L21.427 8a1.95 1.95 0 0 1 0 2.757l-5.304 5.304l1.268 1.267c1.156 1.156.461 3.136-1.164 3.317z"></svg:path>`,
})
export class FluentArrowOutlineDownLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
