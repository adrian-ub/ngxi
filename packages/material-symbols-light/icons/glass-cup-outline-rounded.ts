import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGlassCupOutlineRoundedIcon],svg[material-symbols-light-glass-cup-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.475 21q-.621 0-1.087-.404q-.467-.404-.522-1.025L4.135 4.148q-.062-.471.247-.81T5.167 3h13.666q.477 0 .785.339t.248.809l-1.712 15.423q-.056.621-.522 1.025T16.544 21zm-.834-3.5l.225 1.962q.038.23.211.384t.404.154h9.058q.23 0 .403-.154t.212-.384l.225-1.962zm-.104-1h10.952L18.866 4H5.116zM6.64 20h10.738z"></svg:path>`,
})
export class MaterialSymbolsLightGlassCupOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
