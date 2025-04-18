import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineDiagonalIcon],svg[ix-line-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M431.024 111.085L111.023 431.084l-30.17-30.169l319.999-320z"></svg:path>`,
})
export class IxLineDiagonalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
