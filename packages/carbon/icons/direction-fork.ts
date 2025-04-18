import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionForkIcon],svg[carbon-direction-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13V7.414l9 9V28h2V16.414l9-9V13h2V4h-9v2h5.586L16 14.586L7.414 6H13V4H4v9z"></svg:path>`,
})
export class CarbonDirectionForkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
