import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineCapSquareIcon],svg[ix-line-cap-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.334v42.667H128v256h341.333v42.666h-384V85.334zm-128 85.333v64h128v42.667h-128v64H170.667V170.667zm-42.666 42.667h-85.334v85.333h85.334z"></svg:path>`,
})
export class IxLineCapSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
