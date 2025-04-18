import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMathIcon],svg[mynaui-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.429 18.366h6M15 8.707h6m-6-4.39h6M3 6.512h3.429m0 0h3.428m-3.428 0V3m0 3.512v3.512M15.6 21l2.425-2.484m0 0l2.424-2.483m-2.424 2.483L15.6 16.033m2.425 2.483L20.449 21"></svg:path>`,
})
export class MynauiMathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
