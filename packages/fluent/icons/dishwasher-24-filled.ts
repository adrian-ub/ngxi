import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDishwasher24FilledIcon],svg[fluent-dishwasher-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25V9H3zm5.987 4.263l-.012-.013H21v7.25A3.25 3.25 0 0 1 17.75 21H8.482A1.75 1.75 0 0 0 7 19.518v-1.894a4.25 4.25 0 0 0 2.5-3.874v-2c0-.464-.184-.91-.513-1.237M9 6.25a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-10 5.5a.75.75 0 0 0-.75.75v2a3.25 3.25 0 0 0 2.5 3.163V20.5h-.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H6v-3.587a3.25 3.25 0 0 0 2.5-3.163v-2a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentDishwasher24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
