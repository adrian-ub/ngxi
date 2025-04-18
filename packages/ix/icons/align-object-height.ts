import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectHeightIcon],svg[ix-align-object-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 64v384H192V64zm-42.666 42.667h-128v298.666h128zM128 85.333h21.333v341.334h21.334V448h-64v-21.333H128zm-21.333 0V64h64v21.333z"></svg:path>`,
})
export class IxAlignObjectHeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
