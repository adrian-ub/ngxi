import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMusicIcon],svg[whh-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.5 896Q752 896 696 858.5T640 768t56-90.5T832 640q31 0 64 8V269L384 371v525q0 53-56 90.5T192 1024T56 986.5T0 896t56-90.5T192 768q31 0 64 8V192q0-26 19-45t45-19L960 0q26 0 45 18.5t19 45.5v704q0 53-56.5 90.5t-136 37.5"></svg:path>`,
})
export class WhhMusicIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
