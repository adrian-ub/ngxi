import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageTable20FilledIcon],svg[fluent-image-table-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3h3zM3 7v6h3V7zm4-1h6V3H7zm7-3v3h3a3 3 0 0 0-3-3m3 4h-3v6h3zm0 7h-3v3a3 3 0 0 0 3-3m-4 3v-3H7v3zm-7 0v-3H3a3 3 0 0 0 3 3M7 7v6h.296l1.502-1.502a1.7 1.7 0 0 1 2.404 0L12.704 13H13V7zm4 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m.29 5H8.71l.795-.795a.7.7 0 0 1 .99 0z"></svg:path>`,
})
export class FluentImageTable20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
