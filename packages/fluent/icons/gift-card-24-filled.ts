import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGiftCard24FilledIcon],svg[fluent-gift-card-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19H19a3 3 0 0 0 3-3v-4.5H10.56l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 12.56zM8 10V9a1 1 0 1 0-1 1zm1.5-1v1h1a1 1 0 1 0-1-1m0-2.292V4H19a3 3 0 0 1 3 3v3h-9.208A2.5 2.5 0 0 0 9.5 6.708M8 4v2.708A2.5 2.5 0 0 0 4.708 10H2V7a3 3 0 0 1 3-3zm0 8.56V19H5a3 3 0 0 1-3-3v-4.5h4.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentGiftCard24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
