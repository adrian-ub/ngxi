import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentXray24RegularIcon],svg[fluent-xray-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 5.75a.75.75 0 0 0-1.5 0v.75H9A.75.75 0 0 0 9 8h2.25v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1.5h-2a2.25 2.25 0 1 0 2.122 1.5h1.256a2.25 2.25 0 1 0 2.122-1.5h-2V13h3.5a.75.75 0 0 0 0-1.5h-3.5v-1h3.5a.75.75 0 0 0 0-1.5h-3.5V8H15a.75.75 0 0 0 0-1.5h-2.25zm2 10.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-6.25.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M7.25 2A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V5.25A3.25 3.25 0 0 0 16.75 2zM5.5 5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v13.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentXray24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
