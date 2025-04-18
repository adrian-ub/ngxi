import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCodeIcon],svg[cil-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m388.632 393.82l107.191-137.88l-107.139-137.762l-25.26 19.644l91.864 118.122l-91.92 118.236zm-240.053-19.639L56.712 255.999l91.917-118.176l-25.258-19.646L16.177 255.993l107.137 137.826zM330.529 16h-32.97L178.441 496h32.971z"></svg:path>`,
})
export class CilCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
