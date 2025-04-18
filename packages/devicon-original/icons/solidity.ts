import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalSolidityIcon],svg[devicon-original-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M84.466 0L63.887 36.578H22.756L43.321 0z" opacity=".45"></svg:path><svg:path d="M63.887 36.576h41.145L84.468 0H43.323z" opacity=".6"></svg:path><svg:path d="m43.323 73.138l20.565-36.562L43.323 0L22.759 36.576z" opacity=".8"></svg:path><svg:path d="M43.521 128L64.1 91.424h41.145L84.666 128z" opacity=".45"></svg:path><svg:path d="M64.1 91.426H22.955l20.564 36.575h41.145z" opacity=".6"></svg:path><svg:path d="M84.666 54.864L64.102 91.426l20.564 36.575l20.579-36.575z" opacity=".8"></svg:path>`,
})
export class DeviconOriginalSolidityIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
