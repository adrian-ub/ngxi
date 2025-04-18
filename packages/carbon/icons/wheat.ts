import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWheatIcon],svg[carbon-wheat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v2.586l-4 4V1h-2v8.586l-4-4V3H9v16a7.004 7.004 0 0 0 6 6.92V30h2v-4.08A7.004 7.004 0 0 0 23 19V3Zm-6 20.899A5.01 5.01 0 0 1 11 19v-2.586l4 4Zm0-6.313l-4-4V8.414l4 4Zm2-5.172l4-4v5.172l-4 4Zm0 11.485v-3.485l4-4V19a5.01 5.01 0 0 1-4 4.899"></svg:path>`,
})
export class CarbonWheatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
