import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTableBuiltIcon],svg[carbon-table-built-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-4V4a2.003 2.003 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v18a2.003 2.003 0 0 0 2 2h4v4a2.003 2.003 0 0 0 2 2h18a2.003 2.003 0 0 0 2-2V10a2.003 2.003 0 0 0-2-2m-6 14h-8v-5h8Zm0-7h-8v-5h8Zm-10 0H4v-5h8ZM22 4v4H4V4ZM4 22v-5h8v5Zm24 6H10v-4h12a2.003 2.003 0 0 0 2-2V10h4Z"></svg:path>`,
})
export class CarbonTableBuiltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
