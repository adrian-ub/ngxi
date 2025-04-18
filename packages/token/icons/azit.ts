import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAzitIcon],svg[token-azit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.874 5.166l-.141-.257L3 19.091h2.553l6.19-9.982l6.731 9.982H21z"></svg:path><svg:path fill="currentColor" d="m13.435 16.909l7.565-12h-7.069l1.244 2.182h1.963l-7.592 12h11.078l-1.244-2.182z"></svg:path>`,
})
export class TokenAzitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
