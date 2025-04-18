import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectDimensionsIcon],svg[ix-align-object-dimensions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 149.333V448H149.333V149.333zM405.333 192H192v213.333h213.333zm-320-21.333H64v-21.334h64v21.334h-21.333v256H128V448H64v-21.333h21.333zM170.667 128h-21.334V64h21.334v21.333h256v21.334h-256zm256-64H448v64h-21.333z"></svg:path>`,
})
export class IxAlignObjectDimensionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
