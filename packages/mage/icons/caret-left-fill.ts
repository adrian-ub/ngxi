import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCaretLeftFillIcon],svg[mage-caret-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 5.484v13a1.26 1.26 0 0 1-.76 1.16a1.25 1.25 0 0 1-.51.1h-.19a1.2 1.2 0 0 1-.65-.31l-6.76-6.08a2 2 0 0 1-.46-.59a1.8 1.8 0 0 1-.17-.73c-.008-.251.04-.5.14-.73c.095-.237.242-.449.43-.62l6.82-6.11a1.26 1.26 0 0 1 .65-.3a1.23 1.23 0 0 1 1.25.56c.131.192.204.417.21.65"></svg:path>`,
})
export class MageCaretLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
