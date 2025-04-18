import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsVerticallyIcon],svg[ix-align-objects-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 128h42.666V42.667h-42.666zm0 170.667h42.666v-85.334h-42.666zm-149.334 128h149.334v42.666h42.666v-42.666h149.334V277.333H85.333zM128 384v-64h256v64zm21.333-149.333h213.334V85.333H149.333zM192 192v-64h128v64z"></svg:path>`,
})
export class IxAlignObjectsVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
