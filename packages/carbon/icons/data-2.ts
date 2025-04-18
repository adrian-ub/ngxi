import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonData2Icon],svg[carbon-data-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h11v2H4zm14 0h10v2H18zm3 6h7v2h-7zm-10 0h7v2h-7zm-7 0h4v2H4zm0 6h24v2H4zm0 6h17v2H4zm20 0h4v2h-4z"></svg:path>`,
})
export class CarbonData2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
