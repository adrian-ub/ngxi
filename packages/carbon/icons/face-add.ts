import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceAddIcon],svg[carbon-face-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a6 6 0 0 1-5.14-2.92l-1.71 1a8 8 0 0 0 13.7 0l-1.71-1A6 6 0 0 1 16 22M30 4h-4V0h-2v4h-4v2h4v4h2V6h4zm-18.5 7a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5"></svg:path><svg:path fill="currentColor" d="M27.61 13a12.3 12.3 0 0 1 .39 3A12 12 0 1 1 16 4V2a14 14 0 1 0 13.67 11Z"></svg:path>`,
})
export class CarbonFaceAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
