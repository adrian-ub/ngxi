import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elReturnKeyIcon],svg[el-return-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M808.969 133.929v257.06H942.94v267.899H417.981V508.763L0 787.417l417.982 278.654V915.946H1200V133.928H808.969z"></svg:path>`,
})
export class ElReturnKeyIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
