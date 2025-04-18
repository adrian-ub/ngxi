import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsLayoutIcon],svg[bxs-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v4h18V5c0-1.103-.897-2-2-2M3 19c0 1.103.897 2 2 2h8V11H3zm12 2h4c1.103 0 2-.897 2-2v-8h-6z"></svg:path>`,
})
export class BxsLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
