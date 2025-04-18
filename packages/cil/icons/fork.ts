import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilForkIcon],svg[cil-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 166.291v179.418a76 76 0 1 0 32 0V282h152a80.09 80.09 0 0 0 80-80v-36.689a75.983 75.983 0 1 0-32 1.733V202a48.055 48.055 0 0 1-48 48H156v-83.709a76 76 0 1 0-32 0M324 92a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44M184 420a44 44 0 1 1-44-44a44.05 44.05 0 0 1 44 44M140 48a44 44 0 1 1-44 44a44.05 44.05 0 0 1 44-44"></svg:path>`,
})
export class CilForkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
