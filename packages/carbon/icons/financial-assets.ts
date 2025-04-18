import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFinancialAssetsIcon],svg[carbon-financial-assets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 16h-2v2h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h4v2h-6v2h3v2h2v-2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-4v-2h6v-2h-3zm1-8h-6V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15v-2H4V10h24v4h2v-4c0-1.1-.9-2-2-2m-8 0h-8V4h8z"></svg:path>`,
})
export class CarbonFinancialAssetsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
