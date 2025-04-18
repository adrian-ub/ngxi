import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFolderIcon],svg[cil-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 472H40a24.03 24.03 0 0 1-24-24V64a24.03 24.03 0 0 1 24-24h186.667a23.935 23.935 0 0 1 22.154 14.77L269.333 104H472a24.03 24.03 0 0 1 24 24v320a24.03 24.03 0 0 1-24 24M48 440h416V136H248l-26.667-64H48Z"></svg:path>`,
})
export class CilFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
