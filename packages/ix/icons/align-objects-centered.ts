import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsCenteredIcon],svg[ix-align-objects-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.667 405.333v-128h-128v-42.666h128v-128h64v-64h42.666v64h64v128h128v42.666h-128v128h-64v64h-42.666v-64zm42.666-42.666h85.334V149.333h-85.334z"></svg:path>`,
})
export class IxAlignObjectsCenteredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
