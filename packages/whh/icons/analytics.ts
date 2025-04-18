import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAnalyticsIcon],svg[whh-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 448V0q91 0 174 35.5T893 131t95.5 143t35.5 174zm-128 576q-91 0-174-35.5T131 893T35.5 750T0 576t35.5-174T131 259t143-95.5T448 128v448h448q0 91-35.5 174T765 893t-143 95.5t-174 35.5"></svg:path>`,
})
export class WhhAnalyticsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
