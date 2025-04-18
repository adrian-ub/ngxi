import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCompressIcon],svg[cil-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 144H16v32h160V16h-32zm224 0V16h-32v160h160v-32zm-32 352h32V368h128v-32H336zM16 368h128v128h32V336H16z"></svg:path>`,
})
export class CilCompressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
