import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeIcon],svg[mynaui-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.007-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.007 2.685 3.796l.23.23"></svg:path>`,
})
export class MynauiCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
