import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsInformationCampaignNegativeIcon],svg[healthicons-information-campaign-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsInformationCampaignNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-8 24c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16m-17.243 4.243a6 6 0 0 0 8.486 0l1.414 1.414a8 8 0 1 1 0-11.314l-1.414 1.414a6 6 0 1 0-8.486 8.486M15 31V21h2v10zm1-11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsInformationCampaignNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsInformationCampaignNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
