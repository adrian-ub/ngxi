import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBootstrapIcon],svg[la-bootstrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3v11.99c5.93 0 7.117.08 8.227-.25c.65-.2 2.43-.84 2.43-3.09c0-1-.3-2.69-2.26-3.11v-.03h-.37c1-.45 1.63-1.3 1.63-2.55c0-.32.09-2.96-3.41-2.96zm2 2h4c1.509 0 1.656.853 1.656 1.49C18.656 15.044 17.03 15 17 15h-4zm0 5h4.76c1.86 0 1.896 1.176 1.896 1.48c0 1.56-1.611 1.52-1.806 1.52H13z"></svg:path>`,
})
export class LaBootstrapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
