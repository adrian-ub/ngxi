import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCloudIcon],svg[fe-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.713 9.72l-1.073 1.542l-1.606-.975A2 2 0 0 0 7 12v2H5a1 1 0 0 0 0 2h11a4 4 0 1 0-3.287-6.28M16 6a6 6 0 1 1 0 12H5a3 3 0 0 1 0-6a4 4 0 0 1 6.071-3.423A6 6 0 0 1 16 6"></svg:path>`,
})
export class FeCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
