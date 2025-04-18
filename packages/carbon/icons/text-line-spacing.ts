import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextLineSpacingIcon],svg[carbon-text-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h13v2H17zm0 6h10v2H17zm0 6h13v2H17zm0 6h10v2H17zm-5.41-10.59L8 9.83l-3.59 3.59L3 12l5-5l5 5zm0 5.18L8 22.17l-3.59-3.59L3 20l5 5l5-5z"></svg:path>`,
})
export class CarbonTextLineSpacingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
