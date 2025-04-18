import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFileNewIcon],svg[el-file-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.583 0L29.513 218.249V1200H635.49v-104.328H134.506V292.179h197.589v-187.85h442.844v312.986h104.992V0zm472.725 508.73v249.091H479.145V950.91h249.163V1200h193.016V950.91h249.164V757.821H921.323V508.73z"></svg:path>`,
})
export class ElFileNewIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
