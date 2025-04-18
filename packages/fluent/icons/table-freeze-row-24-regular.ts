import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeRow24RegularIcon],svg[fluent-table-freeze-row-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75V8.5h-15zM10 10h4v4h-4zm-1.5 0v4h-4v-4zm0 5.5v4H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5zm1.5 4v-4h4v4zm5.5-5.5v-4h4v4zm0 1.5h4v2.25a1.75 1.75 0 0 1-1.75 1.75H15.5z"></svg:path>`,
})
export class FluentTableFreezeRow24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
