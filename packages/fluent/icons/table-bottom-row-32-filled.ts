import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow32FilledIcon],svg[fluent-table-bottom-row-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4a5 5 0 0 0-5 5v11h2V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11h2V9a5 5 0 0 0-5-5zm11 18v6h-8v-6zm3 6h-1v-6h6v1a5 5 0 0 1-5 5m-13-6v6H9a5 5 0 0 1-5-5v-1z"></svg:path>`,
})
export class FluentTableBottomRow32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
