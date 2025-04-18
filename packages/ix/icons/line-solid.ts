import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineSolidIcon],svg[ix-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 234.666H85.333v42.667h341.334z"></svg:path>`,
})
export class IxLineSolidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
