import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCatalogPublishIcon],svg[carbon-catalog-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 20l1.4 1.4l-2.6 2.6H28v2h-9.2l2.6 2.6L20 30l-5-5zm-6-5h8v2h-8zm0-7h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M13 28H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18v16h2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4H4v2h2v5H4v2h2v5H4v2h2v4c0 1.1.9 2 2 2h5z"></svg:path>`,
})
export class CarbonCatalogPublishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
