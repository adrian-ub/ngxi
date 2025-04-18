import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFlagAltIcon],svg[cil-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 16v480h32V360h352v-37.238L363.841 208L448 93.238V56H96V16Zm348.159 72l-88 120l88 120H96V88Z"></svg:path>`,
})
export class CilFlagAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
