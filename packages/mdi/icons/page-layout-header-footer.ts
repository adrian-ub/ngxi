import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutHeaderFooterIcon],svg[mdi-page-layout-header-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H6v-4h12zm0-12H6V4h12z"></svg:path>`,
})
export class MdiPageLayoutHeaderFooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
