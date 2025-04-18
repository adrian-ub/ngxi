import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMusicIcon],svg[icomoon-free-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0h1v11.5c0 1.381-1.567 2.5-3.5 2.5S9 12.881 9 11.5S10.567 9 12.5 9c.979 0 1.865.287 2.5.751V4L7 5.778V13.5C7 14.881 5.433 16 3.5 16S0 14.881 0 13.5S1.567 11 3.5 11c.979 0 1.865.287 2.5.751V2z"></svg:path>`,
})
export class IcomoonFreeMusicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
