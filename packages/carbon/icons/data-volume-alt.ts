import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataVolumeAltIcon],svg[carbon-data-volume-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 29c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m0-4a1.001 1.001 0 0 0 0 2a1.001 1.001 0 0 0 0-2"></svg:path><svg:circle cx="20" cy="21" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 19c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m0-4a1.001 1.001 0 0 0 0 2a1.001 1.001 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M13 27H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 3.586L16.414 7H28a2 2 0 0 1 2 2v7h-2V9H15.586l-4-4H4v20h9z"></svg:path>`,
})
export class CarbonDataVolumeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
