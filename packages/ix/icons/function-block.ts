import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFunctionBlockIcon],svg[ix-function-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 85.333v149.333h64v42.667h-64v149.334H149.333v-85.334h-64v-42.666h64v-85.334h-64v-42.666h64V85.332zM320 128H192v256h128z"></svg:path>`,
})
export class IxFunctionBlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
