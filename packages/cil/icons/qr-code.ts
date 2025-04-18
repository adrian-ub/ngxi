import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilQrCodeIcon],svg[cil-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48h128V16H16v160h32z"></svg:path><svg:path fill="currentColor" d="M176 176V80H80v96zm-64-64h32v32h-32Zm216-64h136v128h32V16H328z"></svg:path><svg:path fill="currentColor" d="M432 176V80h-96v96zm-64-64h32v32h-32ZM176 464H48V336H16v160h160z"></svg:path><svg:path fill="currentColor" d="M176 336H80v96h96zm-32 64h-32v-32h32Zm320 64H328v32h168V336h-32z"></svg:path><svg:path fill="currentColor" d="M272 304h128v64h32v-96H272z"></svg:path><svg:path fill="currentColor" d="M432 432v-32H240V272H80v32h128v128zM208 80h32v96h-32z"></svg:path><svg:path fill="currentColor" d="M80 240h224V80h-32v128H80zm256-32h96v32h-96zm0 128h32v32h-32zm-64 0h32v32h-32z"></svg:path>`,
})
export class CilQrCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
