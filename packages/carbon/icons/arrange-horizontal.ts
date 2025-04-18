import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrangeHorizontalIcon],svg[carbon-arrange-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h28v2H2zm11 18H5c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-8-8v6h8v-6zm22 8h-8c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-8-8v6h8v-6zM2 27h28v2H2z"></svg:path>`,
})
export class CarbonArrangeHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
