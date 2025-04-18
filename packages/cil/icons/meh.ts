import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMehIcon],svg[cil-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16m147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.3 207.3 0 0 1-44.589 66.125"></svg:path><svg:path fill="currentColor" d="M152 200h40v40h-40zm168 0h40v40h-40zM168 320h176v32H168z"></svg:path>`,
})
export class CilMehIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
