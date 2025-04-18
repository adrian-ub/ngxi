import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilColumnsIcon],svg[cil-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 48H40a24.03 24.03 0 0 0-24 24v376a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V72a24.03 24.03 0 0 0-24-24m-8 32v64H48V80ZM48 176h192v264H48Zm224 264V176h192v264Z"></svg:path>`,
})
export class CilColumnsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
