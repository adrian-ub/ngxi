import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonal2LineIcon],svg[ri-expand-diagonal-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.414 5H10V3H3v7h2V6.414l4.293 4.293l1.414-1.414zM21 14h-2v3.586l-4.293-4.293l-1.414 1.414L17.586 19H14v2h7z"></svg:path>`,
})
export class RiExpandDiagonal2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
