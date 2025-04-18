import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilViewColumnIcon],svg[cil-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm304 32v320H192V96ZM48 96h112v320H48Zm416 320H352V96h112Z"></svg:path>`,
})
export class CilViewColumnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
