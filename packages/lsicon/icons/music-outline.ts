import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMusicOutlineIcon],svg[lsicon-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 11.992V3.51l8-1.01v7.852m-7.903-4.5l8.129-1.16M5.5 11.997a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm8-1.549a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path>`,
})
export class LsiconMusicOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
