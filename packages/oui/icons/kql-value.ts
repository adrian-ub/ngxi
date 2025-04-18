import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiKqlValueIcon],svg[oui-kql-value-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a5 5 0 1 1 0 8a5 5 0 1 1 0-8m-.75.692a4 4 0 1 0 0 6.615A4.98 4.98 0 0 1 6 8c0-1.268.472-2.426 1.25-3.308M11.348 11l2.078-5.637h-.739l-1.656 4.727h-.062L9.313 5.363h-.739L10.652 11z"></svg:path>`,
})
export class OuiKqlValueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
