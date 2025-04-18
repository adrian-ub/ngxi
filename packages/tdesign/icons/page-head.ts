import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPageHeadIcon],svg[tdesign-page-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10v12h-2V12H5v10H3V10zm0-8v6H3V2zm-2 2H5v2h14z"></svg:path>`,
})
export class TdesignPageHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
