import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faQrcodeIcon],svg[fa-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024v128H256v-128zm0-768v128H256V256zm768 0v128h-128V256zM128 1279h384V896H128zm0-767h384V128H128zm768 0h384V128H896zM640 768v640H0V768zm512 512v128h-128v-128zm256 0v128h-128v-128zm0-512v384h-384v-128H896v384H768V768h384v128h128V768zM640 0v640H0V0zm768 0v640H768V0z"></svg:path>`,
})
export class FaQrcodeIcon {
  readonly viewBox = input("0 0 1408 1408")
  readonly width = input("1em")
  readonly height = input("1em")
}
