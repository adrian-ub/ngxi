import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLayoutIcon],svg[bx-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m0 2l.001 4H5V5zM5 11h8v8H5zm10 8v-8h4.001l.001 8z"></svg:path>`,
})
export class BxLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
