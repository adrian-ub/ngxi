import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFunctionBlockNewIcon],svg[ix-function-block-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64v42.667h-64v64H384v-64h-64V384h64v-64zM341.333 85.333l-.001 149.333h64.001v42.667h-64.001l.001 85.333h-42.666V128h-128v256h128l-.001 42.666H128v-85.333H64v-42.666h64v-85.335l-64 .001v-42.666h64V85.332z"></svg:path>`,
})
export class IxFunctionBlockNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
