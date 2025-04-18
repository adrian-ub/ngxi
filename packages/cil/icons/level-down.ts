import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLevelDownIcon],svg[cil-level-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171.313 348.686l-22.626 22.628L272 494.627l123.313-123.313l-22.626-22.628L288 433.373V96H72v32h184v305.373z"></svg:path>`,
})
export class CilLevelDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
