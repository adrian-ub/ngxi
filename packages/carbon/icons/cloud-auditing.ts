import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCloudAuditingIcon],svg[carbon-cloud-auditing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="m21 15l-5-4.96l1.59-1.57L21 11.85l7.41-7.35L30 6.08z"></svg:path>`,
})
export class CarbonCloudAuditingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
