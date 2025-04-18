import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextIndentIcon],svg[carbon-text-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h14v2H14zm0 6h14v2H14zm-7 6h21v2H7zm0 6h21v2H7zM4 13.59L7.29 10L4 6.41L5.42 5l4.62 5l-4.62 5z"></svg:path>`,
})
export class CarbonTextIndentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
