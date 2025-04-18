import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMouseIcon],svg[tdesign-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9a8 8 0 1 1 16 0v6a8 8 0 1 1-16 0zm7-5.917A6 6 0 0 0 6 9h5zm2 0V9h5a6 6 0 0 0-5-5.917M18 11H6v4a6 6 0 0 0 12 0z"></svg:path>`,
})
export class TdesignMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
