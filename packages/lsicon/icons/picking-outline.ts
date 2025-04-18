import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingOutlineIcon],svg[lsicon-picking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14 13.5H4m0 0A1.5 1.5 0 1 1 2.5 12M4 13.5A1.5 1.5 0 0 0 2.5 12m0-10v10m2-8.5v3h6v-3zm0 5v3h8v-3z"></svg:path>`,
})
export class LsiconPickingOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
