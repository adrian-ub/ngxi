import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCrossTabIcon],svg[carbon-cross-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H10a2 2 0 0 0-2 2v3H4a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M10 4h18v3H10Zm18 10h-8V9h8Zm-18 7v-5h8v5Zm8 2v5h-8v-5ZM8 21H4v-5h4ZM18 9v5h-8V9Zm2 7h8v5h-8ZM8 9v5H4V9ZM4 23h4v5H4Zm16 5v-5h8v5Z"></svg:path>`,
})
export class CarbonCrossTabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
