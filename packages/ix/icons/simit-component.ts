import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSimitComponentIcon],svg[ix-simit-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 128H128v82.815L85.333 189.48V85.333h341.334v125.482L384 189.48zm0 194.517V384H128v-82.816l-42.667 21.333v104.15h341.334V301.183zM170.667 256L64 309.333V202.666zm192 53.333L469.333 256l-106.666-53.334z"></svg:path>`,
})
export class IxSimitComponentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
