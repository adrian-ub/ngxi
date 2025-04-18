import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBedDoubleIcon],svg[mdi-bed-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3a2 2 0 0 0-2 2v5h1.33L6 19h1l.67-2h8.66l.67 2h1l.67-2H20v-5a2 2 0 0 0-2-2m-7 0H8V7h3m5 3h-3V7h3Z"></svg:path>`,
})
export class MdiBedDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
