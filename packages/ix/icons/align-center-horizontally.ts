import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignCenterHorizontallyIcon],svg[ix-align-center-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667v128H192v-85.334h128v85.334h85.333v-128zm298.666 170.666H320v85.334H192v-85.334h-85.333v128h298.666zM234.667 320h42.666V192h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlignCenterHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
