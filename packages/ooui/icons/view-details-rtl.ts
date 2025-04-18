import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiViewDetailsRtlIcon],svg[ooui-view-details-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V6h9v2zm9-3H1V3h11zm1-2h6v6h-6zm-1 13H3v-2h9zm0-3H1v-2h11zm1-2h6v6h-6z"></svg:path>`,
})
export class OouiViewDetailsRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
