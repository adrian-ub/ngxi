import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineCapFlatIcon],svg[ix-line-cap-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.334v42.667h-384v42.666h128v64h256v42.667h-256v64h-128v42.667h384v42.666H42.667V85.334zm-298.666 128H85.333v85.333h85.334z"></svg:path>`,
})
export class IxLineCapFlatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
