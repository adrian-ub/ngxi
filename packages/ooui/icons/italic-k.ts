import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiItalicKIcon],svg[ooui-italic-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19L6 1h3L7 9.5L15 1h3l-8.5 9l5.5 9h-3l-5-9l-2 9z"></svg:path>`,
})
export class OouiItalicKIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
