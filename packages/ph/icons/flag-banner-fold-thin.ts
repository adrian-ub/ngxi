import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldThinIcon],svg[ph-flag-banner-fold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.36 45.83A4 4 0 0 0 232 44h-80a4 4 0 0 0-3.64 2.34L138.52 68H28a4 4 0 0 0-3 6.69L62.59 116L25 157.31a4 4 0 0 0 3 6.69h73.09a4 4 0 0 0 3.64-2.35l9.85-21.65h71.21l-37.43 82.34a4 4 0 0 0 2 5.3a4.1 4.1 0 0 0 1.64.36a4 4 0 0 0 3.64-2.35l80-176a4 4 0 0 0-.28-3.82M98.52 156H37l34-37.31a4 4 0 0 0 0-5.38L37 76h97.84Zm90.9-24h-71.21l36.37-80h71.21Z"></svg:path>`,
})
export class PhFlagBannerFoldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
