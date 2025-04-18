import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickToRightIcon],svg[cil-arrow-thick-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56v120H16v160h160v120h38.623l200-199.8L214.635 56Zm32 361.384V304H48v-96h160V94.639l161.373 161.535ZM463.998 56h32v400h-32z"></svg:path>`,
})
export class CilArrowThickToRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
