import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSearchAdvancedIcon],svg[carbon-search-advanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 6h-4V2h-2v4h-4v2h4v4h2V8h4zm-6 22.586l-5.975-5.975a9.023 9.023 0 1 0-1.414 1.414L22.586 30zM4 17a7 7 0 1 1 7 7a7.01 7.01 0 0 1-7-7"></svg:path>`,
})
export class CarbonSearchAdvancedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
