import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeskMultiple24FilledIcon],svg[fluent-desk-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3.5A2.25 2.25 0 0 0 4.63 5h12.62a3.25 3.25 0 0 1 3.25 3.25v8.537a.75.75 0 0 0 1.5-.037v-8.5a4.75 4.75 0 0 0-4.75-4.75zM2 8.25A2.25 2.25 0 0 1 4.25 6h13a2.25 2.25 0 0 1 2.25 2.25v11a.75.75 0 0 1-1.5 0V9.5H2zM2 11h9v6.75A2.25 2.25 0 0 1 8.75 20h-4.5A2.25 2.25 0 0 1 2 17.75zm3.25 2a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentDeskMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
