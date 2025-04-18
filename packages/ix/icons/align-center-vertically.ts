import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignCenterVerticallyIcon],svg[ix-align-center-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64H64v384h384V64zm21.334 192V106.667h128V192h-85.334v128h85.334v85.333h-128zm170.666 149.333h128V106.667h-128V192h85.334v128h-85.334zm42.667-128H192v-42.666h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlignCenterVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
