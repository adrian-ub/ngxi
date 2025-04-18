import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstNegativeIcon],svg[healthicons-provider-fst-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsProviderFstNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm25 25a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-4.793-5.207l3.184 3.184l-1.414 1.414l-3.184-3.184zm-1.553-1.553l-3.977-3.977h4.218v-2h-7.632v7.632h2v-4.218l3.977 3.977z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsProviderFstNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsProviderFstNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
