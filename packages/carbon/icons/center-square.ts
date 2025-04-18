import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCenterSquareIcon],svg[carbon-center-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H4V4h8v2H6zm22 0h-2V6h-6V4h8zM12 28H4v-8h2v6h6zm16 0h-8v-2h6v-6h2zM15 10h2v4h-2zm-5 5h4v2h-4zm8 0h4v2h-4zm-3 3h2v4h-2z"></svg:path>`,
})
export class CarbonCenterSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
