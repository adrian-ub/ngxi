import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainSolidityIcon],svg[devicon-plain-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.322 0L22.756 36.576l20.566 36.561l20.564-36.561h41.143L84.465 0zm41.342 54.863L64.1 91.424H22.955L43.519 128h41.145l20.58-36.576z"></svg:path>`,
})
export class DeviconPlainSolidityIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
