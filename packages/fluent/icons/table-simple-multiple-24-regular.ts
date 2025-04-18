import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleMultiple24RegularIcon],svg[fluent-table-simple-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 2A3.25 3.25 0 0 0 2 5.25v10.5A3.25 3.25 0 0 0 5.25 19h10.5A3.25 3.25 0 0 0 19 15.75V5.25A3.25 3.25 0 0 0 15.75 2zM3.5 5.25c0-.966.784-1.75 1.75-1.75H10V10H3.5zm8 4.75V3.5h4.25c.966 0 1.75.784 1.75 1.75V10zm-8 1.5H10v6H5.25a1.75 1.75 0 0 1-1.75-1.75zm8 0h6v4.25a1.75 1.75 0 0 1-1.75 1.75H11.5zM8.25 22a3.25 3.25 0 0 1-3-2h1.776c.316.31.748.5 1.225.5h8.25a4 4 0 0 0 4-4V8.25c0-.477-.19-.91-.5-1.225V5.25a3.25 3.25 0 0 1 2 3v8.25a5.5 5.5 0 0 1-5.5 5.5z"></svg:path>`,
})
export class FluentTableSimpleMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
