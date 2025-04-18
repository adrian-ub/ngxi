import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsZoomoutIcon],svg[ls-zoomout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m541 517l176 176l-72 73l-184-185c-45 25-97 39-151 39C139 620 0 481 0 310S139 0 310 0s311 139 311 310c0 80-31 153-80 207M86 310c0 124 100 223 224 223c123 0 224-99 224-223S433 87 310 87C186 87 86 186 86 310m56-35h337v71H142z"></svg:path>`,
})
export class LsZoomoutIcon {
  readonly viewBox = input("0 0 717 766")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
