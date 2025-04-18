import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFunctionsAltIcon],svg[cil-functions-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 416h232v-32H160v-9.717L269.834 256L160 137.717V128h200V96H128v54.283L226.166 256L128 361.717z"></svg:path>`,
})
export class CilFunctionsAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
