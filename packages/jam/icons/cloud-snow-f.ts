import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCloudSnowFIcon],svg[jam-cloud-snow-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0M6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCloudSnowFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
