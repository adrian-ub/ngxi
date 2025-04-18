import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextArrowDownRightColumn32FilledIcon],svg[fluent-text-arrow-down-right-column-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16-.75A3.25 3.25 0 0 1 21.25 5h4.5A3.25 3.25 0 0 1 29 8.25V13H18zM29 15H18v5h11zm0 7H18v4.75A3.25 3.25 0 0 0 21.25 30h4.5A3.25 3.25 0 0 0 29 26.75zM5 14a1 1 0 1 0-2 0v3.5A4.5 4.5 0 0 0 7.5 22h4.086l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L11.586 20H7.5A2.5 2.5 0 0 1 5 17.5z"></svg:path>`,
})
export class FluentTextArrowDownRightColumn32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
