import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBringForwardIcon],svg[ix-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 192v42.666H128V384h149.333v-21.334H320v64H85.333V192zM426.667 85.333v256h-256v-256z"></svg:path>`,
})
export class IxBringForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
