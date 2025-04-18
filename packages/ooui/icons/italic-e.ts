import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiItalicEIcon],svg[ooui-italic-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19L8 1h9l-.6 2H10L8.6 9H15l-.6 2H8.2L7 17h6.5l-.5 2z"></svg:path>`,
})
export class OouiItalicEIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
