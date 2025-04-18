import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFunctionIcon],svg[ooui-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.263 0a4 4 0 0 0-3.846 2.901L8.246 7H5v2h2.674L6.66 12.55A2 2 0 0 1 4.737 14h-.131a2 2 0 0 1-1.665-.89l-.664-.997l-1.664 1.11l.664.996A4 4 0 0 0 4.606 16h.131a4 4 0 0 0 3.846-2.901L9.754 9H13V7h-2.674l1.014-3.55A2 2 0 0 1 13.263 2h.132a2 2 0 0 1 1.664.89l.664.997l1.664-1.11l-.664-.996A4 4 0 0 0 13.395 0zm6.151 18l-2.5-2.5l2.5-2.5L18 11.586l-2.5 2.5l-2.5-2.5L11.586 13l2.5 2.5l-2.5 2.5L13 19.414l2.5-2.5l2.5 2.5z"></svg:path>`,
})
export class OouiFunctionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
