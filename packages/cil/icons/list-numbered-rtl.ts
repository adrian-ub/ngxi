import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilListNumberedRtlIcon],svg[cil-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 80h288v32H40zm0 160h288v32H40zm0 160h288v32H40zm400-240V40h-64v32h32v88zm-64 102.111V312h80v-32h-44.223L456 257.889V192h-80v32h48v14.111zM376 440v32h80V344h-80v32h48v16h-24v32h24v16z"></svg:path>`,
})
export class CilListNumberedRtlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
