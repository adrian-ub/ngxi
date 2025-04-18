import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDensityMOutlineIcon],svg[lsicon-density-m-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 2.5h13v2h-13zm0 4h13v2h-13zm0 4h13v2h-13z"></svg:path>`,
})
export class LsiconDensityMOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
