import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCardIcon],svg[token-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.78 18.612l3.69-1.847l-13.235-6.607L3.54 12l13.235 6.612zM12 21l3.706-1.848l-8.47-4.235l-3.68 1.848zm8.46-9l-3.695 1.842L13.08 12l3.69-1.842zM8.3 4.853L12.004 3l3.7 1.853L12 6.695L8.3 4.848zm-1.08.535L3.53 7.235l8.47 4.23l3.69-1.842l-8.47-4.23zm9.545 3.7l3.7-1.853l-3.69-1.837l-3.706 1.848z"></svg:path>`,
})
export class TokenCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
