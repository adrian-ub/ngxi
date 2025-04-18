import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWoman2RoundedIcon],svg[material-symbols-light-woman-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.673 20.692v-5.307H8.571q-.426 0-.67-.351q-.243-.351-.082-.755l2.385-5.998q.23-.556.712-.88t1.08-.324q.596 0 1.083.324q.486.324.717.88l2.385 5.998q.161.404-.082.755q-.244.35-.67.35h-2.102v5.308q0 .344-.232.576t-.576.232h-1.038q-.343 0-.576-.232t-.232-.576M12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808"></svg:path>`,
})
export class MaterialSymbolsLightWoman2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
