import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmKnowledgeCatalogStandardIcon],svg[carbon-ibm-knowledge-catalog-standard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10h-8V8h8zm-4 18H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v17h2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4c0 1.1.9 2 2 2h10zm4-13h-8v2h8zm3 12.2l-2.6-2.6L19 26l4 4l7-7l-1.4-1.4z"></svg:path>`,
})
export class CarbonIbmKnowledgeCatalogStandardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
