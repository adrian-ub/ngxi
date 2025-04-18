import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBoldIcon],svg[uil-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 9.5A3.5 3.5 0 0 0 13 6H8.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H13a3.49 3.49 0 0 0 2.44-6a3.5 3.5 0 0 0 1.06-2.5M13 16H9.5v-3H13a1.5 1.5 0 0 1 0 3m0-5H9.5V8H13a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class UilBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
