import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCampaignmonitorIcon],svg[simple-icons-campaignmonitor-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.836 4.27a.915.915 0 0 0-1.273-.226L.163 19.73c.167.235.437.39.747.39h22.18c.503 0 .91-.41.91-.914V4.78a.95.95 0 0 0-.164-.51m-22.4-.226A.91.91 0 0 0 0 4.78v14.45l10.664-8.736zv-.002z"></svg:path>`,
})
export class SimpleIconsCampaignmonitorIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
