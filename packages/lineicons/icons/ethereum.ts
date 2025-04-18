import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEthereumIcon],svg[lineicons-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.86 32.556L32.852 2l17.996 30.556l-17.996 10.887z"></svg:path><svg:path fill="currentColor" d="M14.86 36.05L32.852 62l18.006-25.95l-18.006 10.88z"></svg:path>`,
})
export class LineiconsEthereumIcon {
  readonly viewBox = input("0 0 65 64")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
