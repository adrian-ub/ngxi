import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDensityLOutlineIcon],svg[lsicon-density-l-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 3.5h13v3h-13zm0 6h13v3h-13z"></svg:path>`,
})
export class LsiconDensityLOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
