import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableOffset24RegularIcon],svg[fluent-table-offset-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75H14v4H4.5zm0 3.75h4v4h-4zm5.5 0h9.5v4H10zm9.5-1.5h-4v-4h2.25c.966 0 1.75.784 1.75 1.75zm-4 7h4v2.25a1.75 1.75 0 0 1-1.75 1.75H15.5zm-11 2.25V15.5H14v4H6.25a1.75 1.75 0 0 1-1.75-1.75"></svg:path>`,
})
export class FluentTableOffset24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
