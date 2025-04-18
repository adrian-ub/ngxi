import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadArpdownandupIcon],svg[fad-arpdownandup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M80 75.996A4 4 0 0 1 75.996 80H52.004A4 4 0 0 1 48 75.996V52.004A4 4 0 0 1 52.004 48h23.992A4 4 0 0 1 80 52.004zm16 64A4 4 0 0 1 91.996 144H68.004A4 4 0 0 1 64 139.996v-23.992A4 4 0 0 1 68.004 112h23.992A4 4 0 0 1 96 116.004zm16 64a4 4 0 0 1-4.004 4.004H84.004A4 4 0 0 1 80 203.996v-23.992A4 4 0 0 1 84.004 176h23.992a4 4 0 0 1 4.004 4.004zm64 0a4 4 0 0 1-4.004 4.004h-23.992a4 4 0 0 1-4.004-4.004v-23.992a4 4 0 0 1 4.004-4.004h23.992a4 4 0 0 1 4.004 4.004zm16-64a4 4 0 0 1-4.004 4.004h-23.992a4 4 0 0 1-4.004-4.004v-23.992a4 4 0 0 1 4.004-4.004h23.992a4 4 0 0 1 4.004 4.004zm16-64A4 4 0 0 1 203.996 80h-23.992A4 4 0 0 1 176 75.996V52.004A4 4 0 0 1 180.004 48h23.992A4 4 0 0 1 208 52.004z"></svg:path>`,
})
export class FadArpdownandupIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
