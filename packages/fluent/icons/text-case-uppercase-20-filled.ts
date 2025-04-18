import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextCaseUppercase20FilledIcon],svg[fluent-text-case-uppercase-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.495 3.25a.75.75 0 0 1 .698.504l3.652 10.5a.75.75 0 1 1-1.417.492L8.647 12.5H4.06l-.86 2.266a.75.75 0 0 1-1.402-.532l3.984-10.5a.75.75 0 0 1 .712-.484M4.63 11h3.495L6.454 6.195zM12 3.5a.75.75 0 0 0-.75.75V14.5c0 .414.336.75.75.75h2.75a3.5 3.5 0 0 0 1.714-6.552A3.125 3.125 0 0 0 14.125 3.5zm3.75 3.125c0 .897-.727 1.625-1.625 1.625H12.75V5h1.375c.898 0 1.625.728 1.625 1.625m-1 7.125h-2v-4h2a2 2 0 1 1 0 4"></svg:path>`,
})
export class FluentTextCaseUppercase20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
