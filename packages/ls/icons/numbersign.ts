import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsNumbersignIcon],svg[ls-numbersign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M555 232v60H435l-24 161h114v60H402l-36 246h-60l35-246H180l-37 246H82l37-246H0v-60h128l24-161H31v-60h130L195 0h60l-33 232h161L418 0h61l-35 232zM189 453h162l23-161H212z"></svg:path>`,
})
export class LsNumbersignIcon {
  readonly viewBox = input("0 0 555 759")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
