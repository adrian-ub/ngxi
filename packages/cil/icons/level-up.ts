import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLevelUpIcon],svg[cil-level-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 384v32h216V78.627l84.687 84.687l22.626-22.628L280 17.373L156.687 140.686l22.626 22.628L264 78.627V384z"></svg:path>`,
})
export class CilLevelUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
