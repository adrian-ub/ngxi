import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenZapIcon],svg[token-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.152 9.188V3.71c.027-.135-.024-.456-.444-.653c-.366-.172-.765.083-.885.247c-1.825 2.917-5.233 9.051-5.366 9.36c-.169.389-.054.631.106.81c.119.134.403.214.555.214h3.705l-.79 6.7c.01.155.14.49.564.592c.425.101.717-.205.81-.37l6.057-10.25c.088-.135.27-.494.076-.81a.78.78 0 0 0-.7-.362z"></svg:path>`,
})
export class TokenZapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
