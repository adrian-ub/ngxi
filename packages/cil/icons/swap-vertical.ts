import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSwapVerticalIcon],svg[cil-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 433.373V160h-32v274.51l-69.823-69.823l-22.627 22.626l107.882 107.883l107.881-107.883l-22.626-22.626zM159.432 17.372L51.55 125.255l22.627 22.627L144 78.059V352h32V79.195l68.687 68.687l22.626-22.627z"></svg:path>`,
})
export class CilSwapVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
