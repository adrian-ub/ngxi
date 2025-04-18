import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTornadoIcon],svg[tdesign-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.528 4A.514.514 0 0 0 5 4.5c0 .259.219.5.528.5H19v2H5.528C4.149 7 3 5.898 3 4.5S4.15 2 5.528 2H8v2zM21 8v2H6V8zM8 11h11v2H8zm-2 3h9v2H6zm-1 3h8v2H5zm3 3h7v2H8z"></svg:path>`,
})
export class TdesignTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
