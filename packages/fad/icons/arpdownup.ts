import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadArpdownupIcon],svg[fad-arpdownup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M80 52.004A4 4 0 0 0 75.996 48H52.004A4 4 0 0 0 48 52.004v23.992A4 4 0 0 0 52.004 80h23.992A4 4 0 0 0 80 75.996zm32 64a4 4 0 0 0-4.004-4.004H84.004A4 4 0 0 0 80 116.004v23.992A4 4 0 0 0 84.004 144h23.992a4 4 0 0 0 4.004-4.004zm32 64a4 4 0 0 0-4.004-4.004h-23.992a4 4 0 0 0-4.004 4.004v23.992a4 4 0 0 0 4.004 4.004h23.992a4 4 0 0 0 4.004-4.004zm32-64a4 4 0 0 0-4.004-4.004h-23.992a4 4 0 0 0-4.004 4.004v23.992a4 4 0 0 0 4.004 4.004h23.992a4 4 0 0 0 4.004-4.004zm32-64A4 4 0 0 0 203.996 48h-23.992A4 4 0 0 0 176 52.004v23.992A4 4 0 0 0 180.004 80h23.992A4 4 0 0 0 208 75.996z"></svg:path>`,
})
export class FadArpdownupIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
