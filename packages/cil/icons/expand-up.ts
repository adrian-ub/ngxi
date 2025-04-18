import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExpandUpIcon],svg[cil-expand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 467h480v32H16zm0-320h480V19H16Zm32-96h416v64H48Zm208.077 160.777L96 379.079V419h320v-37.86ZM132.709 387l123.214-128.776L377.522 387Z"></svg:path>`,
})
export class CilExpandUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
