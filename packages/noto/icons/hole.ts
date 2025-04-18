import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoHoleIcon],svg[noto-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="notoHole0" x1="64" x2="64" y1="66.776" y2="141.531" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#424242"></svg:stop><svg:stop offset=".305" stop-color="#222"></svg:stop><svg:stop offset=".87"></svg:stop></svg:lineargradient><svg:ellipse cx="64" cy="82" fill="url(#notoHole0)" rx="57.07" ry="29.74"></svg:ellipse><svg:lineargradient id="notoHole1" x1="64.115" x2="64.115" y1="50.815" y2="112.97" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#BDBDBD"></svg:stop><svg:stop offset=".559" stop-color="#919191"></svg:stop><svg:stop offset=".963" stop-color="#757575"></svg:stop></svg:lineargradient><svg:path fill="url(#notoHole1)" d="M117.95 95.7c25.01-27.3-28.72-49.4-65.53-44.38c-41.89 3.58-68.95 33.41-28.93 53.74c30.38 15.44 79.32 7.93 94.46-9.36q-.015 0 0 0q-.015 0 0 0M64 109.27c-24.1 0-45.21-7.87-52.9-18.51c13.71-34.17 93.92-32.23 105.8 0c-7.69 10.63-28.8 18.51-52.9 18.51"></svg:path><svg:path fill="#757575" d="M11.1 90.76c1.8-4.48 4.75-8.34 8.53-11.59l-.67-14.21C10.58 69.7 7.27 76.23 7.27 81.5c0 4.37 3.83 9.26 3.83 9.26m105.81 0c-1.8-4.48-4.55-8.4-8.52-11.63l.66-14.16c8.37 4.74 11.69 11.27 11.69 16.54c0 4.36-3.83 9.25-3.83 9.25"></svg:path>`,
})
export class NotoHoleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
