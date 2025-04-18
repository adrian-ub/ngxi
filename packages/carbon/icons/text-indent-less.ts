import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextIndentLessIcon],svg[carbon-text-indent-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h10v2H2zm3 6h7v2H5zm-3 6h10v2H2zm3 6h7v2H5zM16 4h2v24h-2zm12.15 19.5l1.41-1.38L23.27 16l6.29-6.12l-1.41-1.38l-7.71 7.5z"></svg:path>`,
})
export class CarbonTextIndentLessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
