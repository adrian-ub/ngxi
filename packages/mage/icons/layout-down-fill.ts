import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutDownFillIcon],svg[mage-layout-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 16.08A6.75 6.75 0 0 1 15.25 22h-6.5a6.75 6.75 0 0 1-6.69-5.92zM22 8.75v5.33H2V8.75A6.76 6.76 0 0 1 8.75 2h6.5A6.76 6.76 0 0 1 22 8.75"></svg:path>`,
})
export class MageLayoutDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
