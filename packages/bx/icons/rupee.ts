import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRupeeIcon],svg[bx-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.99 2.99 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.01 5.01 0 0 0 4.898-4H17V8h-2.602a4.9 4.9 0 0 0-.924-2z"></svg:path>`,
})
export class BxRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
