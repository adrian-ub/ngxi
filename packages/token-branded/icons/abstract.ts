import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAbstractIcon],svg[token-branded-abstract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#054729" d="m14.849 14.776l3.61 3.576l-1.695 1.677l-3.61-3.575a1.63 1.63 0 0 0-1.156-.474c-.44 0-.846.167-1.156.474l-3.61 3.576l-1.694-1.678l3.61-3.576zm.602-1.03l4.93 1.306l.619-2.294l-4.93-1.307a1.62 1.62 0 0 1-.993-.755a1.6 1.6 0 0 1-.163-1.23l1.32-4.882l-2.316-.614l-1.32 4.884l2.85 4.888zm-6.902 0l-4.93 1.306L3 12.758l4.93-1.307a1.62 1.62 0 0 0 .993-.755a1.6 1.6 0 0 0 .163-1.23l-1.32-4.882l2.316-.614l1.32 4.884l-2.85 4.888z"></svg:path>`,
})
export class TokenBrandedAbstractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
