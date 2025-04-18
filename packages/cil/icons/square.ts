import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSquareIcon],svg[cil-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476 16H36a20.023 20.023 0 0 0-20 20v440a20.023 20.023 0 0 0 20 20h440a20.023 20.023 0 0 0 20-20V36a20.023 20.023 0 0 0-20-20m-12 448H48V48h416Z"></svg:path>`,
})
export class CilSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
