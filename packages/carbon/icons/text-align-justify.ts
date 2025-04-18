import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignJustifyIcon],svg[carbon-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20v2H6zm0 6h20v2H6zm0 6h20v2H6zm0 6h20v2H6z"></svg:path>`,
})
export class CarbonTextAlignJustifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
