import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCsvIcon],svg[carbon-csv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 9l-2 13l-2-13h-2l2.516 14h2.968L30 9zM18 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8 0H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H4v10h6z"></svg:path>`,
})
export class CarbonCsvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
