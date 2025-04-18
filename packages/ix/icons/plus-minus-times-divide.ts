import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlusMinusTimesDivideIcon],svg[ix-plus-minus-times-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64H128v64H64v42.667h64v64h42.667v-64h64V128h-64zm23.922 234.667l30.17 30.17l-45.256 45.256l45.254 45.254l-30.17 30.17l-45.254-45.255l-45.254 45.255l-30.17-30.17l45.255-45.254l-45.256-45.257l30.17-30.17l45.255 45.255zM277.333 128H448v42.667H277.333zm85.334 192c11.782 0 21.333-9.55 21.333-21.333s-9.55-21.334-21.333-21.334s-21.334 9.551-21.334 21.334S350.884 320 362.667 320M448 384v-42.667H277.333V384zm-64 42.667c0 11.782-9.55 21.333-21.333 21.333s-21.334-9.55-21.334-21.333s9.551-21.334 21.334-21.334S384 414.884 384 426.667"></svg:path>`,
})
export class IxPlusMinusTimesDivideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
