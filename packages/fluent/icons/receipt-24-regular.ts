import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReceipt24RegularIcon],svg[fluent-receipt-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25V14h4v3.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM17 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H17zM5.25 4.5a.75.75 0 0 0-.75.75v12.5c0 .966.784 1.75 1.75 1.75h9.25V5.25a.75.75 0 0 0-.75-.75zm2 2.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M7.25 15a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentReceipt24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
